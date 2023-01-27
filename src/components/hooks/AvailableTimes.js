import { fetchAPI } from '../Api';
import { useReducer } from 'react';


const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const INITIAL_STATE = {
    times: initialTimes,
}

export const timesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "updateTimes":
            return {
                ...state,
                times: updateTimes(action.value),
            };
        default:
            return state;
    }
}

 function updateTimes(seed) {
    let result = []
    const dateDay = new Date(seed).getDate();
    result = fetchAPI(dateDay)
    return result
}