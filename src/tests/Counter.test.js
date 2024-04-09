import {getByText, render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText('Counter');
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterCount = screen.getByTestId('count');
  expect(counterCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterCount = screen.getByTestId('count');
  const incrementButton = screen.getByText("+");

  fireEvent.click(incrementButton);

  expect(counterCount).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterCount = screen.getByTestId('count');
  const decrementButton = screen.getByText("-");

  fireEvent.click(decrementButton);

  expect(counterCount).toHaveTextContent("-1");
});
