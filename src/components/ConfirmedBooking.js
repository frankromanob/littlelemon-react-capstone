import React from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmedBooking() {
    const data = useLocation()
    return (
        <div className='caja'>
            <div className='form'>
                <h2>Boooking confirmation</h2>
                <article>
                    Date: {data.state.resdate} <br />
                    Time: {data.state.restime} <br />
                    No. guest: {data.state.guests} <br />
                    Occasion: {data.state.occasion} <br />
                </article>
            </div>
        </div>
    )
}

export default ConfirmedBooking;