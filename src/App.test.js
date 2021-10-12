import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders without error", () => {
    expect(wrapper.find(".App")).toHaveLength(1);
  });
});
