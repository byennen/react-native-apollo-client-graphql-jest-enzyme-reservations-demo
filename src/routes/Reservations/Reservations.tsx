import React from "react";
import { Query } from "react-apollo";
import { Button, Text, View } from "react-native";
import ReservationList from "./../../components/ReservationList";
import { RerservationListQueries } from "./../../graphql";
import styles from "./reservationStyles";

export default class Reservations extends React.PureComponent {
  public static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: "Reservations",
      headerRight: (
        <Button
          onPress={() => navigation.navigate("ReservationCreate")}
          title="New"
          color="blue"
        />
      )
    };
  };
  public render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}
