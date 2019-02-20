import React from "react";
import { render } from "react-native-testing-library";
import ReservationCreate from "./../ReservationCreate";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Create Reservation", () => {
  const props = createTestProps();
  const { getByText } = render(<ReservationCreate {...props} />);

  it("should render a create reservation", () => {
    expect(getByText(/Create Reservation/i)).toBeDefined();
  });
});
