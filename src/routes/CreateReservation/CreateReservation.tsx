import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "./createReservationStyles";

interface Props {
  navigation: any;
}

export default class CreateReservation extends Component<Props> {
  public static navigationOptions = {
    title: "Create Reservation"
  };
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create Reservation</Text>
        <Text>Form here...</Text>
      </View>
    );
  }
}
