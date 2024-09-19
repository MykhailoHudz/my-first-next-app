import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileMenu from "../MobileMenu";

// const additionalConstant = 15;
// const additionalConstant2 = 15;
// const additionalConstant3 = 15;

test("matches snapshot", () => {
    const { asFragment } = render(<MobileMenu />);

    expect(asFragment()).toMatchSnapshot();
});
