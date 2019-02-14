import React from "react";
import { Query } from "react-apollo";
import { Text, View } from "react-native";

import { ReservationShowQueries } from "./../../graphql";

import styles from "./reservationShowStyles";

interface Props {
  navigation: any;
}

class ReservationShow extends React.PureComponent<Props> {
  public static navigationOptions = {
    title: "Reservation"
  };
  public render() {
    return (
      <View style={styles.container}>
        <Query
          query={ReservationShowQueries}
          variables={{ id: "cjru9qnoz475s0a44fmif7jw4" }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <Text>Get Reservation...</Text>;
            }
            if (error) {
              return <Text>Get Reservation ERROR! {error}</Text>;
            }

            return <Text>Data: {data.name}</Text>;
          }}
        </Query>
      </View>
    );
  }
}

export default ReservationShow;