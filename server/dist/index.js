"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mock_1 = require("@graphql-tools/mock");
const schema_1 = require("@graphql-tools/schema");
const typeDefs = require("./schema");
const exampleData = require("./exampleData");
const resolvers = {
    Query: {
        games() {
            return exampleData.games;
        },
        reviews() {
            return exampleData.reviews;
        },
    },
};
async function startApolloServer() {
    const server = new server_1.ApolloServer({
        schema: (0, mock_1.addMocksToSchema)({
            schema: (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers }),
        }),
    });
    const { url } = await startStandaloneServer(server);
    console.log(exampleData, `
  Server is running!
  Query at ${url}
    `);
}
const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(10)],
    }),
    Track: () => ({
        id: () => "track_01",
        title: () => "Astro Kitty, Space Explorer",
        author: () => {
            return {
                name: "Grumpy Cat",
                photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
            };
        },
        thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1210,
        modulesCount: () => 6,
    }),
};
startApolloServer();
