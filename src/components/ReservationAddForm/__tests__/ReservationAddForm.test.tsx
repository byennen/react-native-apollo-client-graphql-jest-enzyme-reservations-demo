import { shallow } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { Button } from "react-native";
import { ReservationFactory } from "../../../../tests/factories";
import { ReservationCreateMutation } from "./../../../graphql";
import ReservationAddForm from "./../ReservationAddForm";
import wait from "waait";

const reservation = ReservationFactory.build();
const mocks = [
  {
    request: {
      query: ReservationCreateMutation
    },
    result: { data: { reservation } }
  }
];

describe("Create Reservation", () => {
  const wrapper = shallow(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ReservationAddForm />
    </MockedProvider>
  );

  it("should create a reservation", async () => {
    // expect(wrapper.find("button").text()).toEqual("Submit");
    await wait(0);

    wrapper.update();

    // const button = wrapper.find("button");
    // button.simulate("click");
    console.log(wrapper.debug());
    //   const tree = wrapper.toJSON();
    //   console.log(tree);
    //   expect(tree.children).toContain("Loading...");
  });
});
