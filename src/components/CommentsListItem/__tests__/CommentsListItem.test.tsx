import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommentsListItem from "../CommentsListItem";

test("matches snapshot", () => {
  const commentProps = {
    id: 131,
    body: "rem magnam at voluptatem\naspernatur et et nostrum rerum\ndignissimos eum quibusdam\noptio quod dolores et",
  };
  const { asFragment } = render(<CommentsListItem {...commentProps} />);

  expect(asFragment()).toMatchSnapshot();
});
