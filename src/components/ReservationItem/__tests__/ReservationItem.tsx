import { shallow } from "enzyme";
import React from "react";
import { ReservationFactory } from "./../../../../tests/factories";
import ReservationItem from "./../ReservationItem";

jest.mock("react-navigation", () => ({
  withNavigation: jest.fn(wrapper => wrapper)
}));

const reservation = ReservationFactory.build();

describe("<ReservationItem/>", () => {
  it("should render component", () => {
    const wrapper = shallow(<ReservationItem item={reservation} />);

    expect(
      wrapper
        .find("View")
        .render()
        .text()
    ).toContain(reservation.name);
  });
});
