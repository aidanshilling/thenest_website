import { gql } from 'apollo-server';

export const typeDefs = `
    type Query {
        hello: String!
        articles(category: String!): [Article!]!
    }

    type Article {
        id: ID!
        name: String!
        text: String!
        category: String!
        author: String!
    }

    type Mutation {
        createArticle(name: String! text: String! author: String! category: String!): Article!
    }
`;
