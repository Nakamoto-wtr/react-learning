import { shallow } from "enzyme";
import React from "react";
import { Stock } from "../Stocks/index.js";

describe("Stocks Grid", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Stock />);
  });

  test("Renders image", () => {
    const image = wrapper.find("img");
    expect(image).toHaveLength(1);
  });
});
