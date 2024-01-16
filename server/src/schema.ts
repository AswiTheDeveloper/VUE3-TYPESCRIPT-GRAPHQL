const gql = require("graphql-tag");

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific type"
  type Track {
    id: ID!
    "the trak title"
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  type Author {
    id: ID!
    name: String!
    photo: String!
    verified: Boolean!
  }
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: String!
    content: String!
  }
  type Query {
    tracksForHome: [Track!]!
    games: [Game!]!
    game(id: ID!): Game
    author: [Author!]!
    reviews: [Review!]!
    getReview(id: ID!): Review
  }
`;

module.exports = typeDefs;
