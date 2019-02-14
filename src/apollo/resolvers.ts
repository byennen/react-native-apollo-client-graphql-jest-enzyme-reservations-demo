import { gql } from "apollo-boost";

export const resolvers = {
  Mutation: {
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      cache.writeData({ data: { isConnected } });
      return null;
    }
  }
};
