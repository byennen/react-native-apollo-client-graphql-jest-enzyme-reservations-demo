import React from "react";
import { Text, View } from "react-native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { ReservationProps } from "./../../types/reservation";
import styles from "./reservationItemStyles";
interface Props extends NavigationInjectedProps {
  item: ReservationProps;
}

class ReservationItem extends React.PureComponent<Props> {
  public render() {
    const { item } = this.props;
    return (
      <View style={styles.reservations}>
        <Text style={styles.reservationInfo}>
          {item.arrivalDate} - {item.departureDate} - {item.hotelName}
        </Text>
        <Text style={styles.reservationName}>{item.name}</Text>
      </View>
    );
  }
}

export default withNavigation(ReservationItem);
