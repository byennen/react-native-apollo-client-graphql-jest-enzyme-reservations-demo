import { mount, shallow } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";
import { RerservationListQueries } from "./../../graphql";
import ReservationListContainer from "./ReservationListContainer";
import { FlatList } from "react-native";
import { ReservationFactory } from "../../../tests/factories";
import ReservationList from "./ReservationList";

// it("renders a children component when query success", async () => {
//   const mocks = [
//     {
//       request: { query: RerservationListQueries },
//       result: {
//         data: {
//           reservations: [
//             {
//               name: "Carl Santos",
//               hotelName: "Hilton NYC",
//               arrivalDate: "5/24/19",
//               departureDate: "6/24/19"
//             },
//             {
//               name: "Nathaniel Robert",
//               hotelName: "Hilton NYC",
//               arrivalDate: "2/24/19",
//               departureDate: "8/20/19"
//             },
//             {
//               name: "Eva Castagnoli",
//               hotelName: "Hilton NYC",
//               arrivalDate: "3/18/19",
//               departureDate: "9/28/19"
//             }
//           ]
//         }
//       }
//     }
//   ];
//
//   const wrapper = mount(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <ReservationListContainer />
//     </MockedProvider>
//   );
//
//   await wait(0);
//
//   wrapper.update();
//
//   expect(wrapper.exists("span#id")).toBeTruthy();
//   expect(wrapper.exists("span#name")).toBeTruthy();
//   expect(wrapper.find("span#id").text()).toBe("1");
//   expect(wrapper.find("span#name").text()).toBe("Test");
// });
//
// test("render Reservations", async () => {
//   const mocks = [
//     {
//       request: { query: RerservationListQueries },
//       result: {
//         data: {
//           reservations: [
//             {
//               name: "Carl Santos",
//               hotelName: "Hilton NYC",
//               arrivalDate: "5/24/19",
//               departureDate: "6/24/19"
//             },
//             {
//               name: "Nathaniel Robert",
//               hotelName: "Hilton NYC",
//               arrivalDate: "2/24/19",
//               departureDate: "8/20/19"
//             },
//             {
//               name: "Eva Castagnoli",
//               hotelName: "Hilton NYC",
//               arrivalDate: "3/18/19",
//               departureDate: "9/28/19"
//             }
//           ]
//         }
//       }
//     }
//   ];
//   const wrapper = shallow(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <ReservationListContainer />
//     </MockedProvider>
//   );
//
//   await wait(0); // Wait a tick to get past the loading state
//   // expect(
//   //   wrapper.find(ReservationListContainer).prop("data").reservations.length
//   // ).toBe(3);
//   expect(wrapper.text()).toContain("name: Carl Santos");
//   expect(wrapper.text()).toContain("name: Nathaniel Robert");
// });

describe("<ReservationListContainer />", () => {
  const reservations = ReservationFactory.build(3 as any);

  const mocks = [
    {
      request: { query: RerservationListQueries },
      result: {
        data: {
          reservations: [
            {
              name: "Carl Santos",
              hotelName: "Hilton NYC",
              arrivalDate: "5/24/19",
              departureDate: "6/24/19"
            },
            {
              name: "Nathaniel Robert",
              hotelName: "Hilton NYC",
              arrivalDate: "2/24/19",
              departureDate: "8/20/19"
            },
            {
              name: "Eva Castagnoli",
              hotelName: "Hilton NYC",
              arrivalDate: "3/18/19",
              departureDate: "9/28/19"
            }
          ]
        }
      }
    }
  ];
  const prepareWrapper = mocks => {
    return mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ReservationListContainer />
      </MockedProvider>
    );
  };

  it("should render error state", async () => {
    const wrapper = prepareWrapper(mocks);

    await wait(2);

    wrapper.update();

    expect(wrapper.find(ReservationList).props()).toEqual({
      iconProps: {
        name: "th"
      },
      message: "Your Pokedex is broken"
    });
  });

  it("should render component with data", async () => {
    const wrapper = prepareWrapper(mocks);

    await wait(0);

    wrapper.update();

    expect(wrapper.find(FlatList).props()).toMatchObject({
      horizontal: false,
      data: reservations
    });
  });

  it("should render list item", async () => {
    const wrapper = prepareWrapper(mocks);

    await wait(0);

    wrapper.update();

    const RenderItem = wrapper.find(FlatList).props().renderItem;
    const component = shallow(<RenderItem item={reservations[0]} />);

    expect(component.props()).toEqual({
      item: reservations[0]
    });
    expect(component.name()).toEqual("withNavigation(PokemonItem)");
  });
});
