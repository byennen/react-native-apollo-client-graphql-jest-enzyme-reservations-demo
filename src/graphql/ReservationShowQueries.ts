import gql from "apollo-boost";

const ReservationShowQueries = gql`
  query Reservation($id: String!) {
    reservation(where: { id: $id }) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export default ReservationShowQueries;
