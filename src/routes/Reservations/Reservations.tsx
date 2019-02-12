import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
        <Text style={styles.welcome}>Reservations</Text>
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
