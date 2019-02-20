import React from "react";
import { FlatList } from "react-native";
import { ReservationProps } from "../../types/reservation";
import ReservationItem from "./../ReservationItem";

interface Props {
  reservations: ReservationProps[];
}

const Reservations: React.FunctionComponent<Props> = ({ reservations }) => {
  return (
    <FlatList
      data={reservations}
      keyExtractor={(item: ReservationProps, index) => index.toString()}
      renderItem={({ item }) => <ReservationItem item={item} />}
    />
  );
};

export default Reservations;
