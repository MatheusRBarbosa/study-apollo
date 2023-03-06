import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schemas } from "./schemas/index.js";
import { queriesResolvers, queriesTypes } from "./queries/index.js";
import { mutationsResolvers, mutationsTypes } from "./mutations/index.js";
import { getUserFromToken } from "./context/index.js";
import * as envs from "dotenv";

envs.config();

const server = new ApolloServer({
  typeDefs: [...schemas, ...queriesTypes, ...mutationsTypes],
  resolvers: {
    Query: queriesResolvers,
    Mutation: mutationsResolvers,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const user = getUserFromToken(req);
    return { user };
  },
});

console.log(`🚀  Server ready at: ${url}`);
