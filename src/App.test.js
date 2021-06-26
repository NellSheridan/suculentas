import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SUCULENTAS link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SUCULENTAS/i);
  expect(linkElement).toBeInTheDocument();
});
