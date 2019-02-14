import React from "react";
import { render } from "react-native-testing-library";
import ReservationShow from "./ReservationShow";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Reservation Show", () => {
  const props = createTestProps();
  const { getByText } = render(<ReservationShow {...props} />);

  it("should render a reservation by ID", () => {
    expect(getByText(/reservation/i)).toBeDefined();
  });
});
