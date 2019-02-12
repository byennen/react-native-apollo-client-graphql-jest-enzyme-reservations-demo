import React from "react";
import { render } from "react-native-testing-library";
import Reservation from "./Reservation";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Reservation Show", () => {
  const props = createTestProps();
  const { getByText } = render(<Reservation {...props} />);

  it("should render a reservation by ID", () => {
    expect(getByText(/reservations/i)).toBeDefined();
  });
});
