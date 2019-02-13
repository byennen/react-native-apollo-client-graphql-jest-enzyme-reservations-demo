import { gql } from "apollo-boost";
import React from "react";
import { Mutation } from "react-apollo";
import { Button, Text, TextInput, View } from "react-native";

import styles from "./createReservationStyles";

interface Props {
  navigation: any;
}

const addReservation = gql`
  mutation addReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        name: $name
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      }
    ) {
      id
    }
  }
`;

export default class CreateReservation extends React.PureComponent<Props> {
  public static navigationOptions = {
    title: "Create Reservation"
  };
  state = {
    name: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create Reservation</Text>
        <Mutation mutation={addReservation}>
          {(addReservationMutation, { data }) => (
            <View>
              <Text style={styles.welcome}>Guest Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
                placeholder="Guest Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ hotelName: text })}
                value={this.state.hotelName}
                placeholder="Hotel Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ arrivalDate: text })}
                value={this.state.arrivalDate}
                placeholder="Arrival Date"
              />
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ departureDate: text })}
                value={this.state.departureDate}
                placeholder="Departure Date"
              />
              <Button
                onPress={() => {
                  addReservationMutation({
                    variables: {
                      name: this.state.name,
                      hotelName: this.state.hotelName,
                      arrivalDate: this.state.arrivalDate,
                      departureDate: this.state.departureDate
                    }
                  })
                    .then(res => res)
                    .catch(err => <Text>{err}</Text>);
                  this.setState({
                    name: "",
                    hotelName: "",
                    arrivalDate: "",
                    departureDate: ""
                  });
                }}
                title="Add Reservation"
              />
            </View>
          )}
        </Mutation>
      </View>
    );
  }
}
