import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import Toggle from "./Toggle";

afterEach(cleanup);

describe(`Toggle`, () => {
  it(`renders a Toggle component`, () => {
    const r = render(<Toggle />);
    // console.log(r);
    console.log(r.getByText(`Citation`));
    console.log(r.findByText(`Citation`));
    // expect(r.getByText("Citation")).toBeInDocument();

    console.log(screen.getByText(`Citation`));
    // expect(screen.getByText(`Test Toggle`)).toBeInTheDocument();
  });
});
