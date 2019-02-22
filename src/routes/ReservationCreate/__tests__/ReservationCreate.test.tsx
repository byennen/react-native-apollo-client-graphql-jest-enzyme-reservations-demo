import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import ReservationCreate from "./../ReservationCreate";

jest.mock("react-navigation", () => ({
  withNavigation: jest.fn(wrapper => wrapper)
}));

describe("<ReservationCreate/>", () => {
  it("should render component", () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ReservationCreate />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain("Create Reservation");
  });
});
