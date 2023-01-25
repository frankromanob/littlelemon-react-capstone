import { watchOptions } from 'browser-sync/dist/default-config';
import React from 'react';
import { useState } from 'react';

function BookingForm() {

    const [data,setData] = useState({
        resdate:"",
        restime:"",
        occasion:"",
        guests:1,
      });

    const [availableTimes, setaAvailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00']);

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
            {availableTimes.map(item =>{
                return (<option key={item} value={item}>{item}</option>);})}
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