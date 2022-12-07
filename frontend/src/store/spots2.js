import { csrfFetch } from './csrf';
// import { useHistory } from 'react-router-dom';
const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
const LOAD_ONE_SPOT = 'spots/loadOneSpot'
const LOAD_MY_SPOTS = 'spots/loadMySpots'

const MAKE_SPOT = 'spots/makeSpot'
// const CHANGE_SPOT = 'spots/changeSpot'
// const DELETE_SPOT = 'spots/deleteSpot'

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
export const loadMySpots = (myspots) => {
    return {
        type: LOAD_MY_SPOTS,
        myspots
    };
};

export const makeSpot = (spot) => {
    //rather do LOAD MY SPOTS here // by id
    return {
        type: MAKE_SPOT,
        spot
    };
};

// export const delputSpot = (spotId) => {

//     return {
//         type: CHANGE_SPOT,
//         spotId
//     }
// }

//////////////////////////////////////////////////////////////////////

export const getAllSpots = (e) => async (dispatch) => {
    let pagi
    e ? pagi = e : pagi = ''
    const response = await csrfFetch(`/api/spots${pagi}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        return dispatch(loadAllSpots(data));
        // return data;
    }
};
export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${+id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    // console.log(response, id)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        dispatch(loadOneSpot(data));
        return data

    }
};

export const getMySpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        return dispatch(loadMySpots(data));
    }
}


export const createSpot = (spot) => async (dispatch) => {
    const { address, city, state, country,
        name, description, price, latt } = spot;
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
        let nextresponse = await csrfFetch(`/api/spots/${data.id}/images`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: latt,
                preview: true,
            }),
        });
        if (nextresponse.ok) {
            return [data.id, response]
        }
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
        return dispatch(getAllSpots())
        
        
        // return data
        // return dispatch(getAllSpots())
    }
};


export const makeDeleteSpot = (id) => async (dispatch) => {
    // console.log(id)
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        dispatch(getAllSpots())
        return
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
            let spot = action.spot
            newState.onespot ? newState.onespot[spot.id] = spot :
                newState.onespot = { [spot.id]: spot }
            return newState;
        case LOAD_MY_SPOTS:
            newState.myspots = arrConvert(action.myspots);
            return newState;
        case MAKE_SPOT:
            newState.newspot = action.spot
            return newState;
        // case CHANGE_SPOT:
        //     let id = action.spotId
        //     console.log(newState, '!!! ', id)
        //     id.length === 1 ? delete newState.onespot[id[0]] :
        //         newState.allspots[id[0]] = id[1]
        //     return newState;
        // case DELETE_SPOT:
        //     let del = action.spot.id
        //     delete newState.spots[del]
        //     return newState
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default loggedReducer;


///////////