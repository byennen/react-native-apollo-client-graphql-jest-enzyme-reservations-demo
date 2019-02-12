import { createAppContainer, createStackNavigator } from "react-navigation";

// Routes

// TODO: rename CreateReservation to ReservationCreate
// & Reservation to ReservationShow
import CreateReservation from "./CreateReservation";
import Reservation from "./Reservation";
import Reservations from "./Reservations";

const RootStack = createStackNavigator(
  {
    CreateReservation,
    Reservation,
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
