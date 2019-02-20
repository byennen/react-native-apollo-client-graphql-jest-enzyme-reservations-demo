import { mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { RerservationListQueries } from "./../../../graphql";
import React from "react";
import { ReservationFactory } from "./../../../../tests/factories";
import Reservations from "./../Reservations";
import wait from "waait";

const reservations = ReservationFactory.build(3);
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
const navigation: any = {
  getParam: jest.fn(() => id)
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

    expect(wrapper.find(Loader).exists()).toEqual(true);
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

// import React from "react";
// import { render } from "react-native-testing-library";
// import Reservations from "./../Reservations";
//
// const createTestProps = (props?: object) => ({
//   navigation: {
//     navigate: jest.fn()
//   },
//   ...props
// });
//
// describe("Create Reservation", () => {
//   const props = createTestProps();
//   const { getByText } = render(<Reservations {...props} />);
//
//   it("should render a create reservation", () => {
//     expect(getByText(/Reservations/i)).toBeDefined();
//   });
// });
