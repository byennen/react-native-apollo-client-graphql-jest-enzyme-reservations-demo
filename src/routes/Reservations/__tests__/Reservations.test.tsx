import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { ReservationFactory } from "./../../../../tests/factories";
import { RerservationListQueries } from "./../../../graphql";
import wait from "waait";
import ReservationList from "../../../components/ReservationList";
import Reservations from "./../Reservations";

interface Mocks {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

const reservations = ReservationFactory.build();

const commonMock = {
  request: {
    query: RerservationListQueries
  }
};
const dataMock = {
  ...commonMock,
  result: {
    data: {
      reservations
    }
  }
};

describe("<Reservations/>", () => {
  const prepareWrapper = mocks => {
    return mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Reservations />
      </MockedProvider>
    );
  };

  it("should render loading state", () => {
    const wrapper = prepareWrapper([]);
    expect(wrapper.text()).toContain("Get Reservations...");
  });

  it("should render component with data", async () => {
    const wrapper = prepareWrapper([dataMock]);

    await wait(0);

    wrapper.update();

    expect(wrapper.find(ReservationList).props()).toEqual({
      reservations
    });
  });
});
