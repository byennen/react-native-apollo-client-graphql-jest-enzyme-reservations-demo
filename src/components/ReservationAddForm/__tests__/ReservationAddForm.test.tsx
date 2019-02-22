import { mount } from "enzyme";
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
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ReservationAddForm />
    </MockedProvider>
  );

  it("should create a reservation", async () => {
    // expect(wrapper.find("button").text()).toEqual("Submit");
    await wait(0);

    wrapper.update();
    expect(wrapper.length).toEqual(1);

    wrapper.find("Button").simulate("click");
    console.log(wrapper.debug());

    // wrapper.find("input").simulate("change", {
    //   target: { value: reservation.name }
    // });
    // const button = wrapper.find("button").simulate("click");
    // const tree = wrapper.toJSON();
    //   console.log(tree);
    //   expect(tree.children).toContain("Loading...");
  });
});
