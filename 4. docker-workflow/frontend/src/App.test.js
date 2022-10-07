import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/PROBANDO/i);
  expect(linkElement).toBeInTheDocument();
});


test('Nueva prueba', () => {
  render(<App />);
  const linkElement = screen.getByText(/amazing/i);
  expect(linkElement).toBeInTheDocument();
});

test('Nueva prueba duplicada', () => {
  render(<App />);
  const linkElement = screen.getByText(/PROBANDO/i);
  expect(linkElement).toBeInTheDocument();
});
 
/*
test('Nueva prueba duplicada FALLA', () => {
  render(<App />);
  const linkElement = screen.getByText(/FALLA/i);
  expect(linkElement).toBeInTheDocument();
});
*/