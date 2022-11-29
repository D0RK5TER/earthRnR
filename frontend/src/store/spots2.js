import { csrfFetch } from './csrf';

const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
const LOAD_ONE_SPOT = 'spots/loadOneSpot'
const LOAD_MY_SPOTS = 'spots/loadMySpots'

const MAKE_SPOT = 'spots/makeSpot'
const CHANGE_SPOT = 'spots/changeSpot'
const DELETE_SPOT = 'spots/deleteSpot'

//////// ACTIONS /////////// ACTIONS ////////////
export const loadAllSpots = (spots) => {
    return {
        type: LOAD_ALL_SPOTS,
        spots
    };
};

export const loadOneSpot = (spot) => {
    return {
        type: LOAD_ONE_SPOT,
        spot
    };

};
export const loadMySpots = (spots) => {
    return {
        type: LOAD_MY_SPOTS,
        spots
    };
};

export const makeSpot = (spot) => {
    //rather do LOAD MY SPOTS here // by id
    return {
        type: MAKE_SPOT,
        spot
    };
};

export const changeSpot = (spot) => {
    //rather do LOAD MY SPOTS here // by id
    return {
        type: CHANGE_SPOT,
        spot
    };
};

export const deleteSpot = (spot) => {
    return {
        type: DELETE_SPOT,
        spot
    }
};

//////////////////////////////////////////////////////////////////////

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadAllSpots(data));
        return data;
        // return response; changed to data for check
    }
};
export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${+id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOneSpot(data));
        return data;
        // return response; changed to data for check
    }
};

export const getMySpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadMySpots(data));
        return data
        // return response; changed to data for check
    }
}


export const createSpot = (spot) => async (dispatch) => {
    const { address, city, state, country,
        name, description, price, latt } = spot;
    let lat = 1
    let lng = 1
    const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address, city, state, country,
            lat: 1,
            lng: 1,
            name, description, price
        }),
    })
    if (response.ok) {
        let data = await response.json()
        // await csrfFetch()
        console.log(data.id)
        let nextresponse = await csrfFetch(`/api/spots/${latt}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                address, city, state, country,
                lat: 1,
                lng: 1,
                name, description, price
            }),
        })
        // getAllSpots() INSTEAD OF THE MAKE SPOT FOR UPDATE
        // getOneSpot(data.id) INSTEAD OF THE ALL SPOTS FOR RIGHT PAGE
        dispatch(makeSpot(data))
        return data
    }
}
export const makeChangeSpot = (spot) => async (dispatch) => {
    const { id, address, city, state, country, name, description, price } = spot;
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address, city, state, country,
            lat: 1,
            lng: 1,
            name, description, price
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(changeSpot(data))
        return data
    }
};


export const makeDeleteSpot = (id) => async (dispatch) => {
    // console.log(id)
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(deleteSpot(data));
        return data;
    }
}

////REDUCER




const arrConvert = (arr) => {
    let newallState = {}
    for (let sp of arr) newallState[sp.id] = sp
    return newallState
}



////MIGHT NEED TO PUT THIS IN AND CHANGE STATE = this IF FAILS
const initialState = {}

const loggedReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_ALL_SPOTS:
            newState.allspots = arrConvert(action.spots);
            return newState;
        case LOAD_ONE_SPOT:
            newState.onespot = action.spot
            return newState;
        case LOAD_MY_SPOTS:
            newState.myspots = arrConvert(action.spots);
            return newState;
        case MAKE_SPOT:
            newState.newspot = action.spot
            return newState;
        case CHANGE_SPOT:
            newState.onespot = action.spot
            return newState;
        case DELETE_SPOT:
            let del = action.spot.id
            delete newState.spots[del]
            return newState
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default loggedReducer;


///////////