import React from "react";
import { Query } from "react-apollo";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { RerservationListQueries } from "./../../graphql";
import styles from "./reservationListStyles";

interface Props {
  navigation: any;
}

export default class ReservationList extends React.PureComponent<Props> {
  public static navigationOptions = ({ navigation }) => {
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
      </View>
    );
  }
}