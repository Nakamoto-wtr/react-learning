import { shallow } from "enzyme";
import React from "react";
import Grid from "GridStocks/index";

describe("Stocks Grid", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Grid />);
  });

  test("Renders image", () => {
    console.log(wrapper);
    const image = wrapper.find("img");
    expect(image).toEqual('<img src="../facebook.jpeg" alt="facebook"/>');
  });
});
