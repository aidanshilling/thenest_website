import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';

const startServer = async () => {
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers
		// context: ({ req }) => {
		// 	const token = req.headers.authorization || '';
		// 	const user = getUser(token);
		// 	return { user };
		// }
	});

	server.applyMiddleware({ app });

	await mongoose.connect('mongodb://localhost:27017/nestsports', { useNewUrlParser: true, useUnifiedTopology: true });

	app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000/graphql`));
};

startServer();
