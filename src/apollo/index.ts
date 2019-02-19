import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: `https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev`
});

export default client;
