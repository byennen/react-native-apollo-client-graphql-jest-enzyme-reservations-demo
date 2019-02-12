import ApolloClient from "apollo-boost";
import { defaults } from "./defaults";
import { resolvers } from "./resolvers";

export const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers
    // typeDefs
  }
});
