import React from "react";
import { FlatList } from "react-native";
import { ReservationFactory } from "../../../../tests/factories";
import { shallow } from "enzyme";
import ReservationList from "./../ReservationList";

const reservations = ReservationFactory.buildList(3);
const wrapper = shallow(<ReservationList reservations={reservations} />);

describe("<ReservationList/>", () => {
  it("should render component", () => {
    expect(wrapper.find(FlatList).props()).toMatchObject({
      data: reservations
    });
  });

  it("should render list item", () => {
    const reservation = ReservationFactory.build();
    const RenderItem = wrapper.find(FlatList).prop("renderItem");
    const component = shallow(<RenderItem item={reservation} />);

    expect(component.props()).toEqual({
      item: reservation
    });
    expect(component.name()).toEqual("withNavigation(ReservationItem)");
  });
});
