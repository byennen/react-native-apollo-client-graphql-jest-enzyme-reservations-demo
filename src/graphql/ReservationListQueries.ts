import { gql } from "apollo-boost";

const RerservationListQueries = gql`
  query {
    reservations(orderBy: arrivalDate_DESC) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export default RerservationListQueries;
