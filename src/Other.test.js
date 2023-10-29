import { render, screen } from "@testing-library/react";
import App from "./App";

test("other First Component", () => {
  render(<App />);
  const text = screen.getByText(/First React Test case/i);
  const text2 = screen.getByText(/Sagar Jadhav/i);
  const title=screen.getByTitle(/ai genrated image/i)
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
test("other Testing Input Boc", () => {
  render(<App />);
  const checkInput = screen.getByRole('textbox');
  const checkInputPlaceholder=screen.getByPlaceholderText("Enter User Name")
  expect(checkInput).toBeInTheDocument()
  expect(checkInputPlaceholder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userId");
  expect(checkInput).toHaveAttribute("type","text");
  expect(checkInput).toHaveAttribute("value","sagar jadhav");
});