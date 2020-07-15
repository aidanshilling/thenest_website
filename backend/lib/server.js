"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const serviceAccount = require('./service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://nestsports-3439d.firebaseio.com'
});
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
	type User {
		id: ID!
		name: String!
		articles: [Article]!
	}

	type Article {
		id: ID!
		author: User!
		name: String!
		text: String!
	}

	type Query {
		articles: [Article]
		user(id: String!): User
	}
`;
const resolvers = {
    User: {
        async articles(user) {
            try {
                const userArticles = await admin
                    .firestore()
                    .collection('articles')
                    .where('userId', '==', user.id)
                    .get();
                return userArticles.docs.map((article) => article.data());
            }
            catch (error) {
                throw new apollo_server_1.ApolloError(error);
            }
        }
    },
    Articles: {
        async user(article) {
            try {
                const articleAuthor = await admin.firestore().doc(`users/${article.userId}`).get();
                return articleAuthor.data();
            }
            catch (error) {
                throw new apollo_server_1.ApolloError(error);
            }
        }
    },
    Query: {
        async articles() {
            const articles = await admin.firestore().collection('articles').get();
            return articles.docs.map((article) => article.data());
        },
        async user(_, args) {
            try {
                const userDoc = await admin.firestore().doc(`users/${args.id}`).get();
                const user = userDoc.data();
                return user || new apollo_server_1.ValidationError('User ID not found');
            }
            catch (error) {
                throw new apollo_server_1.ApolloError(error);
            }
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
//# sourceMappingURL=server.js.map