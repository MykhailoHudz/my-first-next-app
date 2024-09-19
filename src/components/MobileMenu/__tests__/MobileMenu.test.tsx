import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileMenu from "../MobileMenu";

test("matches snapshot", () => {
  const { asFragment } = render(<MobileMenu />);

  expect(asFragment()).toMatchSnapshot();
});
