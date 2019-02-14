import { gql } from "apollo-boost";
import { Formik } from "formik";
import React from "react";
import { Mutation } from "react-apollo";
import { Button, Text, TextInput, View } from "react-native";

import { ReservationCreateMutation } from "./../../graphql";

import styles from "./reservationCreateStyles";

interface Props {
  navigation: any;
}

export default class ReservationCreate extends React.PureComponent<Props> {
  public static navigationOptions = {
    title: "Reservation Create"
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
        <Mutation mutation={ReservationCreateMutation}>
          {addReservationMutation => (
            <View>
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

        <Formik
          // initialValues={{ name: "", hotelName: "" }}
          onSubmit={values => {
            addReservationMutation({
              variables: {
                name: values.name,
                hotelName: values.hotelName,
                arrivalDate: values.arrivalDate,
                departureDate: values.departureDate
              }
            })
              .then(res => res)
              .catch(err => <Text>{err}</Text>);
          }}
          // onSubmit={values => console.log(values)}
        >
          {props => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("name")}
                onBlur={props.handleBlur("name")}
                value={props.values.name}
                placeholder="Guest Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("hotelName")}
                onBlur={props.handleBlur("hotelName")}
                value={props.values.hotelName}
                placeholder="Hotel Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("arrivalDate")}
                onBlur={props.handleBlur("arrivalDate")}
                value={props.values.arrivalDate}
                placeholder="Arrival Date"
              />
              <TextInput
                style={styles.input}
                onChangeText={props.handleChange("departureDate")}
                onBlur={props.handleBlur("departureDate")}
                value={props.values.departureDate}
                placeholder="Departure Date"
              />
              <Button onPress={props.handleSubmit} title="Create" />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
