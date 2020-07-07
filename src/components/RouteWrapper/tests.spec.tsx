import React from "react";
import { render } from "@testing-library/react";

import RouteWrapper from "./index";
import { MemoryRouter } from "react-router-dom";

describe("RouteWrapper component", () => {
  it("renders without crashing", () => {
    const props = {
      component: () => <h1>Component</h1>,
      name: "test",
      path: "/",
    };
    render(
      <MemoryRouter>
        <RouteWrapper {...props} />
      </MemoryRouter>,
    );
  });
});
