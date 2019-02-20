import { Factory } from "rosie";
import * as faker from "faker";

export const ReservationFactory = new Factory().attrs({
  name: () => faker.random.word(),
  hotelName: () => faker.random.word(),
  arrivalDate: () => String(faker.random.number()),
  departureDate: () => String(faker.random.number())
});
