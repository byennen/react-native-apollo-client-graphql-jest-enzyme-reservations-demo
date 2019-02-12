import { gql } from "apollo-boost";

const GET_RESERVATIONS = gql`
  query {
    reservations(orderBy: arrivalDate_DESC) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

const SHOW_RESERVATION = gql`
  query Reservation($id: String!) {
    reservation(where: { id: $id }) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export { GET_RESERVATIONS, SHOW_RESERVATION };
