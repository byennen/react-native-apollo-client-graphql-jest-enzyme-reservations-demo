import { createAppContainer, createStackNavigator } from "react-navigation";

import ReservationCreate from "./ReservationCreate";
import ReservationList from "./ReservationList";
import ReservationShow from "./ReservationShow";

const RootStack = createStackNavigator(
  {
    ReservationCreate,
    ReservationList,
    ReservationShow
  },
  {
    initialRouteName: "ReservationList",
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
