import React from "react";
import { render } from "@testing-library/react";

import Tooltip from "./index";

describe("Tooltip component", () => {
  it("renders without crashing", () => {
    const props = {
      title: "Test tooltip",
    };
    render(<Tooltip {...props}>Default Tooltip</Tooltip>);
  });
});
