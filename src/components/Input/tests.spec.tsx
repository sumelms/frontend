import React from "react";
import { render } from "@testing-library/react";

import Input from "./index";

jest.mock("@unform/core", () => {
  return {
    useField() {
      return {
        fieldName: "email",
        defaultValue: "",
        error: "",
        registerField: jest.fn(),
      };
    },
  };
});

describe("Input component", () => {
  it("should be able to render an input", () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText("E-mail")).toBeTruthy();
  });
});
