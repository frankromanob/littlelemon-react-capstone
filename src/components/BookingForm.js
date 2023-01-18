import React from 'react';
import { useState } from 'react';

function BookingForm() {

    const [data,setData] = useState({
        resdate:"",
        restime:"",
        occasion:"",
        guests:1,
      });

      const {resdate,restime,occasion,guests} = data;

      const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]});

        }
        const submitHandler = e => {
          e.preventDefault();
          console.log(data);
        }

return(
  <div className='bookingform'>
    <h2>Make a reservation</h2>
    <form onSubmit={submitHandler}>
    <label htmlFor="resdate">Choose date: </label>
        <input type="date" name="resdate" value={resdate} onChange={changeHandler}/><br />
        <label htmlFor="restime">Choose time: </label>
        <select name="restime" value={restime} onChange={changeHandler}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select> <br/>
        <label htmlFor="guests"> Number of guests: </label>
        <input type="number" placeholder="1" min="1" max="10" name="guests" value={guests} onChange={changeHandler} /><br />
        <label htmlFor="occasion">Occasion: </label>
        <select name="occasion" value={occasion} onChange={changeHandler}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select><br/>
        <input type="submit" name="submit" value="Make Your reservation" />
    </form>
  </div>
)
}

export default BookingForm;