import gql from "graphql-tag";

export const getReservations = gql`
  query {
    apolloClientDemo @client {
      currentPageName
    }
  }
`;

export const getPageNameOptions = {
  props: ({ data: { apolloClientDemo } }) => ({
    apolloClientDemo
  })
};
