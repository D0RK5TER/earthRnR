import { csrfFetch } from './csrf';
// import {arrConvert} from './../utilities/location.js'
// import { useHistory } from 'react-router-dom';
const LOAD_SPOTBOOK = 'spots/loadAllBookings'
const LOAD_MYBOOK = 'spots/loadMyBookings'

export const loadAllBookings = (spots) => {
    return {
        type: LOAD_SPOTBOOK,
        spots
    };
};

export const loadMyBookings = (bookings) => {
    return {
        type: LOAD_MYBOOK,
        bookings
    };

};


export const getTheBooks = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/:${id}/bookings`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        await dispatch(loadAllBookings(data));
        return data
        // return data;
    }
};

export const getMyBooks = () => async (dispatch) => {
    console.log('wtf')
    const response = await csrfFetch('/api/bookings/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch(loadMyBookings(data));
        return data
    }
}
const initialState = {}
const arrConvert = (arr) => {
    let newallState = {}
    for (let sp of arr) newallState[sp.id] = sp
    return newallState
}
const bookingsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_SPOTBOOK:
            newState.onespotbook = arrConvert(action.bookings);
            return newState;
        // case LOAD_MYBOOK:
        //     let books = action.bookings
        //     newState.mybooks ? newState.mybooks[spot.id] = spot :
        //         newState.mybooks = { [spot.id]: spot }
        //     return newState;
        case LOAD_MYBOOK:
            let t = action.bookings
            console.log(t)
            newState.mybooks = arrConvert(action.bookings.bookings);
            return newState;
        // case MAKE_SPOT:
        //     newState.newspot = action.spot
        //     return newState;
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default bookingsReducer;