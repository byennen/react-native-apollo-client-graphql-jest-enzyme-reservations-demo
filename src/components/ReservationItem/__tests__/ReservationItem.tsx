import { shallow } from "enzyme";
import React from "react";
import { ReservationFactory } from "./../../../../tests/factories";
import ReservationItem from "./../ReservationItem";

jest.mock("react-navigation", () => ({
  withNavigation: jest.fn(component => component)
}));
const reservation = ReservationFactory.build();

describe("<ReservationItem/>", () => {
  it("should render component", () => {
    const wrapper = shallow(<ReservationItem item={reservation} />);

    expect(
      wrapper
        .find("Text")
        .render()
        .text()
    ).toContain(reservation.name);
  });
});
