import { gql } from 'apollo-server';

export const typeDefs = `
    type Query {
        hello: String!
        articles: [Article!]!
    }

    type Article {
        id: ID!
        name: String!
    }

    type Mutation {
        createArticle(name: String!): Article!
    }
`;
