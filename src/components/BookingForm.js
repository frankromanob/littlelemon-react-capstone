import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { timesReducer } from './hooks/AvailableTimes.js';
import { submitAPI } from './Api';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


function BookingForm() {
    const navega = useNavigate();
    let confresult = false;
    const reserva=false;

    const [confirmresult, setConfirmresult] = useState(
        reserva
    );

    const [state, dispatch] = useReducer(timesReducer, {
        times: []
    });

    const [data, setData] = useState({
        resdate: "",
        restime: "",
        occasion: "",
        guests: 1,
    });

    const { resdate, restime, occasion, guests } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    useEffect(() => {
        dispatch({ type: "updateTimes", value: resdate })
    }, [resdate])

    const submitHandler = e => {
        e.preventDefault();
        confresult = submitAPI(data);
        swal({
            title: "Your reservation is confirmed!",
            icon: "success",
            button: "View booking",
          });
        setConfirmresult({ ...confirmresult, reserva: confresult })
    }

    useEffect(() => {
        if (confirmresult.reserva == true) {
            navega("/confirmedbooking",{state:data});
        }
    }, [confirmresult]);

    return (
        <div className='caja'>
            <div className='form'>
                <h2>Make a reservation</h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="resdate">Choose date: </label>
                    <input type="date" name="resdate" value={resdate} onChange={changeHandler} /><br />
                    <label htmlFor="restime">Choose time: </label>
                    <select name="restime" value={restime} onChange={changeHandler}>
                        {state.times.map((item, key) => (<option key={key} value={item}>{item}</option>)
                        )}
                    </select> <br />
                    <label htmlFor="guests"> Number of guests: </label>
                    <input type="number" placeholder="1" min="1" max="10" name="guests" value={guests} onChange={changeHandler} /><br />
                    <label htmlFor="occasion">Occasion: </label>
                    <select name="occasion" value={occasion} onChange={changeHandler}>
                        <option></option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Business</option>
                        <option>Other</option>
                    </select><br />
                    <input type="submit" name="submit" value="Make Your reservation" />
                </form>
            </div>
        </div>
    )
}

export default BookingForm;