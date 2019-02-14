import React from "react";
import { Button, FlatList, Text, View } from "react-native";
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
        <FlatList
          data={this.props.reservations}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Text>
              {item.arrivalDate} - {item.departureDate} - {item.hotelName} -{" "}
              {item.name}
            </Text>
          )}
        />
      </View>
    );
  }
}
