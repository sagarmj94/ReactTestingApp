import { render, screen } from "@testing-library/react";
import App from "./App";

test("test First Component", () => {
  render(<App />);
  const text = screen.getByText(/First React Test case/i);
  const text2 = screen.getByText(/Sagar Jadhav/i);
  const title=screen.getByTitle(/ai genrated image/i)
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
