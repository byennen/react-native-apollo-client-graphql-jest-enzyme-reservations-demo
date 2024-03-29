import React from "react";
import { Text, View } from "react-native";
import ReservationAddForm from "./../../components/ReservationAddForm";

import styles from "./reservationCreateStyles";

export default class ReservationCreate extends React.PureComponent {
  public static navigationOptions = {
    title: "Reservation Create"
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create Reservation</Text>
        <ReservationAddForm />
      </View>
    );
  }
}
