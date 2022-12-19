import { csrfFetch } from './csrf';
const LOAD_SPOTBOOK = 'spots/loadAllBookings'
const LOAD_MYBOOK = 'spots/loadMyBookings'

export const loadAllBookings = (bookings) => {
    return {
        type: LOAD_SPOTBOOK,
        bookings
    };
};

export const loadMyBookings = (bookings) => {
    return {
        type: LOAD_MYBOOK,
        bookings
    };

};


export const getTheBooks = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${id}/bookings`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(loadAllBookings(data));
        return data

    }
};

export const getMyBooks = () => async (dispatch) => {
    const response = await csrfFetch('/api/bookings/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
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
            newState.onespotbook = arrConvert(action.bookings.bookings);
            return newState;
        case LOAD_MYBOOK:
            newState.mybooks = arrConvert(action.bookings.bookings);
            return newState;
        // case MAKE_BOOK:
        //     newState.newspot = action.spot
        //     return newState;
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default bookingsReducer;