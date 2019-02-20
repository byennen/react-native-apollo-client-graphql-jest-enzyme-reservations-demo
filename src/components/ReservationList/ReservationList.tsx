import React from "react";
import { FlatList, Text } from "react-native";
import { ReservationProps } from "../../types/reservation";

interface Props {
  reservations: ReservationProps[];
}

const Reservations: React.FunctionComponent<Props> = ({ reservations }) => {
  return (
    <FlatList
      data={Reservations}
      keyExtractor={(item: ReservationProps, index) => index.toString()}
      renderItem={({ item }) => (
        <Text>
          {item.arrivalDate} - {item.departureDate} - {item.hotelName} -{" "}
          {item.name}
        </Text>
      )}
    />
  );
};

export default Reservations;

{
  /* renderItem={({ item }) => <ReservationItem item={item} />} */
}
