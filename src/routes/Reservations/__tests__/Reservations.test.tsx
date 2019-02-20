import { mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { RerservationListQueries } from "./../../../graphql";

import { GET_POKEMON_DETAILS } from "../gql";
import React from "react";
import { PokemonDetailsFactory } from "../../../tests/factories";
import wait from "waait";
import ScreenMessage from "../../../components/ScreenMessage";
import Pokemon from "../Pokemon";
import PokemonTabs from "../PokemonTabs";
import Loader from "../../../components/Loader";

jest.mock("../../../components/ScreenMessage/styles");

const id = "4321";
const pokemon = PokemonDetailsFactory.build(3);
const commonMock = {
  request: {
    query: RerservationListQueries,
    variables: {
      id
    }
  }
};
const dataMock = {
  ...commonMock,
  result: {
    data: {
      pokemon
    }
  }
};
const navigation: any = {
  getParam: jest.fn(() => id)
};

describe("<Pokemon/>", () => {
  const prepareWrapper = mocks => {
    return mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Pokemon navigation={navigation} />
      </MockedProvider>
    );
  };

  it("should render loading state", () => {
    const wrapper = prepareWrapper([]);

    expect(wrapper.find(Loader).exists()).toEqual(true);
  });

  it("should render error state", async () => {
    const mock = {
      ...commonMock,
      error: new Error()
    };
    const wrapper = prepareWrapper([mock]);

    await wait(2);

    wrapper.update();

    expect(wrapper.find(ScreenMessage).props()).toEqual({
      iconProps: {
        name: "question-circle"
      },
      message: "Pokemon not found"
    });
  });

  it("should render component with data", async () => {
    const wrapper = prepareWrapper([dataMock]);

    await wait(0);

    wrapper.update();

    expect(wrapper.find(PokemonTabs).props()).toEqual({
      pokemon
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
