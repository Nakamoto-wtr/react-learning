import { shallow } from "enzyme";
import React from "react";
import List from "./index.js";

const setup = (props = {}) => {
  return shallow(<List {...props} />);
};

describe("Stocks Filter Compoenent", () => {
  //   let wrapper;

  //   wrapper = shallow(<List />);

  test("renders without error", () => {});
});
