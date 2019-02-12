import React, { Component } from "react";
import { Query } from "react-apollo";
import { Button, FlatList, Text, View, TouchableOpacity } from "react-native";

import { GET_RESERVATIONS } from "./../../graphql";

import styles from "./reservationsStyles";

interface Props {
  navigation: any;
}

export default class Reservations extends Component<Props> {
  public static navigationOptions = {
    title: "Reservations"
  };
  public render() {
    return (
      <View style={styles.container}>
        <Query query={GET_RESERVATIONS} pollInterval={500}>
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
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Reservation", {
                        id: item.id
                      });
                    }}
                  >
                    <Text>
                      {item.arrivalDate} - {item.departureDate} -{" "}
                      {item.hotelName} - {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            );
          }}
        </Query>
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
