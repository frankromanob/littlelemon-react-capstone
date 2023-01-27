import React from 'react';
import BookingPage from './BookingPage';

function Reservations() {
  return (
    <div className='home'>
      <h2>Reservations</h2>
      <article>
        <h2>Here you can reserve a table</h2>
        <BookingPage />
      </article>
    </div>
  )
}

export default Reservations;