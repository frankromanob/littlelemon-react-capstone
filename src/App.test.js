import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Main from './components/Main';


test('Renders the booking form', () => {
  render(<Main />);
  render(<BookingForm />);
  const linkElement = screen.getByText(/Make a reservation/i);
  expect(linkElement).toBeInTheDocument();
});
