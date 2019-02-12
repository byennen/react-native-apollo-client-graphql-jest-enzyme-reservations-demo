import { gql } from "apollo-boost";

export const getReservations = gql`
  query {
    rates(currency: "USD") {
      currency
    }
  }
`;

export const showReservation = gql`
  query {
    rates(currency: "USD") {
      currency
    }
  }
`;
