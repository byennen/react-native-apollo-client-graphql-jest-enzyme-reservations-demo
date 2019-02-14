import ApolloClient from "apollo-boost";
import { defaults } from "./defaults";
import { resolvers } from "./resolvers";

const Client = new ApolloClient({
  uri: `https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev`,
  clientState: {
    defaults,
    resolvers
  }
});

export default Client;
