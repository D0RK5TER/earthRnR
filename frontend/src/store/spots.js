import { csrfFetch } from './csrf';
// import { useHistory } from 'react-router-dom';
const LOAD_ALL_SPOTS = 'spots/loadAllSpots'
const LOAD_ONE_SPOT = 'spots/loadOneSpot'
const LOAD_MY_SPOTS = 'spots/loadMySpots'

const MAKE_SPOT = 'spots/makeSpot'

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
        await dispatch(loadAllSpots(data));
        return data
    }
};
export const getOneSpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(loadOneSpot(data));
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
        await dispatch(loadMySpots(data));
        return data
    }
}
export const createSpotImage = (spotimg) => async (dispatch) => {
    const { url, preview, id, deleteId } = spotimg
    if (preview) {
        const response1 = await csrfFetch(`/api/spot-images/${deleteId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },

        });
        if (response1.ok) {
            const response = await csrfFetch(`/api/spots/${id}/images`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    url,
                    preview
                }),
            });

            if (response.ok) {
                let data = await response.json()
                await dispatch(getMySpots())
                return data
            }
        }
    }
    else {
        const response = await csrfFetch(`/api/spots/${id}/images`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url,
                preview
            }),
        });

        if (response.ok) {
            let data = await response.json()
            await dispatch(getMySpots())
            return data
        }
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
export const makeChangeSpot = (obj) => async (dispatch) => {
    const { id, address, city, state, country, name, description, price, place } = obj;
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
        place ? await dispatch(getMySpots()) : await dispatch(getAllSpots())
    }
};


export const makeDeleteSpot = (obj2) => async (dispatch) => {
    const { id, place } = obj2
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        place ? dispatch(getMySpots()) : dispatch(getAllSpots())
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
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default loggedReducer;


///////////