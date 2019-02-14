import { createAppContainer, createStackNavigator } from "react-navigation";

// Routes

// TODO: rename CreateReservation to ReservationCreate
// & Reservation to ReservationShow
// & Reservations to ReservationList
import ReservationCreate from "./ReservationCreate";
import Reservation from "./Reservation";
import Reservations from "./Reservations";

const RootStack = createStackNavigator(
  {
    ReservationCreate,
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
