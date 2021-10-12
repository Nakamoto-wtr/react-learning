import { shallow } from "enzyme";
import React from "react";
import NewExpense from "./NewExpense";

describe("New Expenses Component", () => {
  let wrapper;

  wrapper = shallow(<NewExpense />);

  test("renders without error", () => {});
});
