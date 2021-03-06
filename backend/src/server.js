import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import cors from 'cors';

const jwt = jsonwebtoken;

require('dotenv').config();

const getUser = (token) => {
	if (!token || token === '') {
		return null;
	}
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, process.env.BCRYPT_KEY);
	} catch (err) {
		console.log(err);
		return null;
	}
	if (!decodedToken) {
		throw new Error('Invalid token');
	}
	const user = decodedToken.userId;
	return user;
};

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		cors: {
			origin: '*', // <- allow request from all domains
			credentials: false
		},
		typeDefs,
		resolvers,
		context: ({ req }) => {
			const token = (req.headers.authorization || '').split(' ')[1];
			const user = getUser(token);

			//if (!user) throw new AuthenticationError('You must be logged in');
			return { user };
		}
	});

	server.applyMiddleware({ app });

	await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

	app.use('/graphql', cors());

	app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at ${process.env.ADDRESS}`));
};

startServer();
