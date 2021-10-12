import { shallow } from "enzyme";
import React from "react";
import { Stock } from "../Stocks/index.js";

describe("Stocks Grid", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Stock
        company="test"
        stockPrice="100"
        timeElapsed="10"
        image="facebook.jpg"
      />
    );
  });

  test("Renders image", () => {
    const image = wrapper.find("img");
    expect(image).toHaveLength(1);
  });

  test("Renders paragraphs", () => {
    const paragraphs = wrapper.find("p");
    expect(paragraphs).toHaveLength(2);
  });
});
