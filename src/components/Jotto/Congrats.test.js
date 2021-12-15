import { shallow } from "enzyme";
import React from "react";
import Congrats from "./Congrats";

const setup = (props = {}) => {
  return shallow(<congrats {...props} />);
};

test("renders without error", () => {
  // const wrapper = setup({ success: false });
  // const component = (wrapper, "component-congrats");
  // expect(component.length).toBe(1);
});

// test("renders no text when `success` prop is false", () => {
//   const wrapper = setup({ success: false });
//   const component = (wrapper, "component-congrats");
//   expect(component.text()).toBe("");
// });

// test("renders non empty congrats message when `success` prop is false", () => {
//   const wrapper = setup({ success: true });
//   const message = (wrapper, "congrats-message");
//   expect(message.text().length).not.toBe(0);
// });

// test('does not throw warning with expected props'), () => {
//   const expectedProps = { success: false };
//   const propError = checkPropTypes(Congrats.proptypes, expectedProps, 'prop', Congrats.name);
//   expect(propError).toBeUndefined();
// }
