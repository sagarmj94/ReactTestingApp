// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("test First Component", () => {
//   render(<App />);
//   const text = screen.getByText(/First React Test case/i);
//   const text2 = screen.getByText(/Sagar Jadhav/i);
//   const title=screen.getByTitle(/ai genrated image/i)
//   expect(text).toBeInTheDocument();
//   expect(text2).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });
// test("Testing Input Boc", () => {
//   render(<App />);
//   const checkInput = screen.getByRole('textbox');
//   const checkInputPlaceholder=screen.getByPlaceholderText("Enter User Name")
//   expect(checkInput).toBeInTheDocument()
//   expect(checkInputPlaceholder).toBeInTheDocument()
//   expect(checkInput).toHaveAttribute("name","username");
//   expect(checkInput).toHaveAttribute("id","userId");
//   expect(checkInput).toHaveAttribute("type","text");
//   expect(checkInput).toHaveAttribute("value","sagar jadhav");
// });



import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText('First React Test Case');
  expect(titleElement).toBeInTheDocument();
});

test('renders your name', () => {
  const { getByText } = render(<App />);
  const nameElement = getByText('Sagar Jadhav');
  expect(nameElement).toBeInTheDocument();
});

test('renders an image with a title', () => {
  const { getByTitle } = render(<App />);
  const imageElement = getByTitle('ai genrated image');
  expect(imageElement).toBeInTheDocument();
});

test('renders an input with specific attributes', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(<App />);
  const inputElement = getByPlaceholderText('Enter User Name');
  const userIdInput = getByDisplayValue('sagar jadhav');

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('name', 'username');
  expect(inputElement).toHaveAttribute('id', 'userId');
  expect(inputElement).toHaveAttribute('readOnly');
  expect(userIdInput).toBeInTheDocument();
});
