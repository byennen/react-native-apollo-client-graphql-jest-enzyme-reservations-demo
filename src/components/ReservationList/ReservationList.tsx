import React from "react";
import { FlatList, Text } from "react-native";

interface Props {
  reservations: any;
}

export default class ReservationList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    console.log(this.props);
    return (
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
    );
  }
}
