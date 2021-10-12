import { shallow } from "enzyme";
import React from "react";
import Expenses from "./ExpenseItem";

describe("Expenses Compoenent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Expenses />);
  });

  test("renders without error", () => {
    expect(wrapper.find(".expense-item")).toHaveLength(1);
  });
});
