import React from "react";
import { Text } from "react-native";
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import { ReservationProps } from "./../../types/reservation";

interface Props extends NavigationInjectedProps {
  item: ReservationProps;
}

class ReservationItem extends React.PureComponent<Props> {
  public render() {
    const { item } = this.props;
    return (
      <Text>
        {item.arrivalDate} - {item.departureDate} - {item.hotelName} -{" "}
        {item.name}
      </Text>
    );
  }
}

export default withNavigation(ReservationItem);
