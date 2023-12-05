import { render, screen } from '@testing-library/react';
import { App } from '@/components/App';

test('renders learn react link', () => {
  render(<App />);
  const div = screen.getByText<HTMLDivElement>(/hello/i);
  expect(div).toBeInTheDocument();
});
