import { createAppContainer, createStackNavigator } from "react-navigation";

import ReservationCreate from "./ReservationCreate";
import Reservations from "./Reservations";

const RootStack = createStackNavigator(
  {
    ReservationCreate,
    Reservations
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
