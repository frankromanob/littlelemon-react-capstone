import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';



test('Renders the booking form', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Make a reservation/i);
  expect(linkElement).toBeInTheDocument();
});
