import { shallow } from "enzyme";
import React from "react";
import Footer from "./index.js";

describe("footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test("Renders Links", () => {
    const footerLinks = wrapper.find("li");
    expect(footerLinks).toHaveLength(3);
  });
});
