import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
// import { shallow } from "enzyme";
import { render } from "react-native-testing-library";
import wait from "waait";
import { RerservationListQueries } from "./../../graphql";
import Reservations from "./Reservations";

const createTestProps = (props?: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

test("Mounted Reservations", async () => {
  const props = createTestProps();

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
  const output = render(
    <MockedProvider mocks={mocks}>
      <Reservations {...props} />
    </MockedProvider>
  );
  await wait(0); // Wait a tick to get past the loading state
  expect(output.text()).toContain("name: Carl Santos");
  expect(output.text()).toContain("name: Nathaniel Robert");
});

//
// const createTestProps = (props?: object) => ({
//   navigation: {
//     navigate: jest.fn()
//   },
//   ...props
// });
//
// describe("Reservations", () => {
//   const props = createTestProps();
//   // const { getByText } = render(
//   //   <MockedProvider mocks={mocks} addTypename={false}>
//   //     <ReservationList {...props} />
//   //   </MockedProvider>
//   // );
// });
