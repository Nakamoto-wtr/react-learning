import { mount } from "enzyme";
import React from "react";

import App from "./App";

const setup = (state = {}) => {
  //TODO apply state
  const wrapper = mount(<App />);

  const inputBox = (wrapper, "imput-box");
  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = (wrapper, "submit_button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  describe("some words guessed", () => {});
});
