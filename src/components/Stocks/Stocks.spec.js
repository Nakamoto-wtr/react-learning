import { shallow } from "enzyme";
import React from "react";
// import Grid from "GridStocks/index";
import { Stock } from "../Stocks/index.js";

describe("Stocks Grid", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Stock />);
  });

  test("Renders image", () => {
    console.log(wrapper);
    const image = wrapper.find("img");
    expect(image).toEqual('<img src="../facebook.jpeg" alt="facebook"/>');
  });
});
