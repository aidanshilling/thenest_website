import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const startServer = async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers
	});

	await mongoose.connect('mongodb://localhost:27017/nestsports', { useNewUrlParser: true, useUnifiedTopology: true });

	server.listen({ port: 4000 }).then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	});
};

startServer();
