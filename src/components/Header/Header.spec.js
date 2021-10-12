import { shallow } from "enzyme";
import React from "react";
import Header from "../Header/index";

describe("Header Component", () => {
  const render = () => shallow(<Header />);

  test("renders as a header element", () => {
    expect(render().type()).toBe("div");
  });

  test("has a fluid container", () => {
    expect(render().find(".headerMenu")).toHaveLength(1);
  });

  test("can have children", () => {
    const children = <div className=".menuItem" />;
    expect(render({ children }).find(".menuItem")).toHaveLength(3);
  });
});
