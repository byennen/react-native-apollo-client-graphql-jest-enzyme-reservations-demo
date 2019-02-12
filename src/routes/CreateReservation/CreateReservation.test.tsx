import React from "react";
import { render } from "react-native-testing-library";
import CreateReservation from "./CreateReservation";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("CreateReservation", () => {
  const props = createTestProps();
  const { getByText } = render(<CreateReservation {...props} />);

  it("should render a create reservation", () => {
    expect(getByText(/Create Reservation/i)).toBeDefined();
  });
});
