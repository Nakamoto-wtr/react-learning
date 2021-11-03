import React from "react";

describe("state of controlled input field", () => {
  test("state update with value of input box upon change", () => {
    const mockGuess = jest.fn();

    //Using destructure
    jest.mock("react", () => ({
      ...jest.requireActual("react"),
      useState: (initailState) => [initialState, mockGuess],
    }));

    //Without using destructure
    React.useState = jest.fn(() => ["", mockGuess]);
    const wrapper = setup();
    const inputBox = (wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockevent);

    expect(mockGuess).toHaveBeenCalledWith("train");
  });
});
