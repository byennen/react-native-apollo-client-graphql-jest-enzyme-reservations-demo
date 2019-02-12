import { gql } from "apollo-boost";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { Button, FlatList, Text, View } from "react-native";

import styles from "./reservationsStyles";

interface Props {
  navigation: any;
}

const GET_RESERVATIONS = gql`
  {
    reservations(orderBy: arrivalDate_DESC) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

const GetReservations = () => (
  <Query query={GET_RESERVATIONS}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>Get Reservations...</Text>;
      }
      if (error) {
        return <Text>Get Reservations ERROR! {error}</Text>;
      }
      return (
        <FlatList
          data={data.reservations}
          renderItem={({ item }) => (
            <Text>
              {item.arrivalDate} - {item.departureDate} - {item.hotelName} -{" "}
              {item.name}
            </Text>
          )}
        />
      );
    }}
  </Query>
);

export default class Reservations extends Component<Props> {
  public static navigationOptions = {
    title: "Reservations"
  };
  public render() {
    return (
      <View style={styles.container}>
        <GetReservations />
        <Button
          onPress={() => this.props.navigation.navigate("CreateReservation")}
          title="Create a new Reservation"
          color="blue"
          accessibilityLabel="Retake"
        />
      </View>
    );
  }
}
