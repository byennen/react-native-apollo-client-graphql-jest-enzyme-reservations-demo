import React from "react";
import { Query } from "react-apollo";
import { Text } from "react-native";
import { RerservationListQueries } from "./../../graphql";
import ReservationList from "./ReservationList";

const ReservationListContainer = () => (
  <Query query={RerservationListQueries} pollInterval={500}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>Get Reservations...</Text>;
      }
      if (error) {
        return <Text>Get Reservations ERROR! {error}</Text>;
      }
      return <ReservationList reservations={data.reservations} />;
    }}
  </Query>
);

export default ReservationListContainer;
