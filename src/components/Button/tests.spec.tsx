import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Button from "./index";

describe("Button component", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Button>Default button</Button>);
  });

  it("should render correctly", () => {
    const { getByTestId } = render(<Button>Default button</Button>);
    expect(getByTestId("button-container")).toHaveTextContent("Default button");
  });

  it("should accept variant", () => {
    const { getByTestId } = render(
      <Button variant="primary">Primary button</Button>,
    );
    // @TODO Test button color
    expect(getByTestId("button-container")).toHaveTextContent("Primary button");
  });

  it("should be clickable", (done) => {
    const { getByTestId } = render(
      <Button onClick={() => done()}>Click me</Button>,
    );
    fireEvent.click(getByTestId("button-container"));
  });
});
