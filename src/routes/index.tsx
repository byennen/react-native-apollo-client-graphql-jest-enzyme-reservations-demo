import { createAppContainer, createStackNavigator } from "react-navigation";

import ReservationCreate from "./ReservationCreate";
import ReservationShow from "./ReservationShow";
import ReservationList from "./ReservationList";

const RootStack = createStackNavigator(
  {
    ReservationCreate,
    ReservationShow,
    ReservationList
  },
  {
    initialRouteName: "Reservations",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#19A1D5"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const Routes = createAppContainer(RootStack);

export default Routes;
