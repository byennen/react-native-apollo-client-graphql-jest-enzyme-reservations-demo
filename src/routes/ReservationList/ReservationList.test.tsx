import React from "react";
import { render } from "react-native-testing-library";
import ReservationList from "./ReservationList";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Reservations", () => {
  const props = createTestProps();
  const { getByText } = render(<ReservationList {...props} />);

  it("should render all reservations", () => {
    expect(getByText(/reservations/i)).toBeDefined();
  });
});
