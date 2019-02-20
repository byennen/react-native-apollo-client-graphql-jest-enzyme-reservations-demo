import React from "react";
import { render } from "react-native-testing-library";
import Reservations from "./../Reservations";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Create Reservation", () => {
  const props = createTestProps();
  const { getByText } = render(<Reservations {...props} />);

  it("should render a create reservation", () => {
    expect(getByText(/Reservations/i)).toBeDefined();
  });
});
