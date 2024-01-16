import { ApolloServer } from "@apollo/server";
const { startStandaloneServer } = require("@apollo/server/standalone");
import { DocumentNode } from "graphql";

const typeDefs: DocumentNode = require("./schema");
const exampleData = require("./exampleData");

const resolvers = {
  Query: {
    tracksForHome: () => exampleData.tracksForHome,
    games() {
      return exampleData.games;
    },
    game: (parent, args, context, info) => {
      console.log(parent, args, context, info);

      // Assuming exampleData.games is an array of games
      return exampleData.games.find((game) => game.id === args.id);
    },
    reviews() {
      return exampleData.reviews;
    },
    getReview(_, args) {
      console.log(args, "args");
      return exampleData.reviews.find((review) => review?.id === args?.id);
    },

    author: () => exampleData.authors,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready");
