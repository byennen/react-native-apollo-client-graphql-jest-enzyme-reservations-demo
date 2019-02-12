import { createAppContainer, createStackNavigator } from "react-navigation";

// Routes
import CreateReservation from "./CreateReservation";
import Reservations from "./Reservations";

const RootStack = createStackNavigator(
  {
    Reservations,
    CreateReservation
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
