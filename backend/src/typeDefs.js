import { gql } from 'apollo-server';

export const typeDefs = `
    type Query {
        hello: String!
        articles(category: String): [Article!]!
        users: [User!]!
        login(username: String!, password: String!): AuthData!
        getUser(token: String!): User!
    }

    type Mutation {
        createArticle(name: String! text: String! author: String! imageUrl: String! category: String!): Article
        createUser(username: String! password: String!): User
    }

    type Article {
        _id: ID!
        name: String!
        text: String!
        category: String!
        author: String!
        imageUrl: String!
        userId: ID!
    } 

    type User {
        _id: ID!
        username: String!
        password: String
        createdArticles: [Article!]
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
`;
