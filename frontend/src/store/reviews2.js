import { csrfFetch } from './csrf';

const LOAD_ALL_REVIEWS = 'reviews2/loadAllReviews'
const LOAD_ONE_REVIEW = 'reviews2/loadOneReview'
const LOAD_MY_REVIEWS = 'reviews2/loadMyReviews'

const MAKE_REVIEW = 'reviews2/makeReview'
const CHANGE_REVIEW = 'reviews2/changeReview'
const DELETE_REVIEW = 'reviews2/deleteReview'

//////// ACTIONS /////////// ACTIONS ////////////
export const loadAllReviews = (reviews) => {
    // console.log('!!!1', reviews)
    return {
        type: LOAD_ALL_REVIEWS,
        reviews
    };
};

export const loadOneReview = (review) => {
    return {
        type: LOAD_ONE_REVIEW,
        review
    };

};
export const loadMyReviews = (reviews) => {
    return {
        type: LOAD_MY_REVIEWS,
        reviews
    };
};

export const makeReview = (review) => {
    //rather do LOAD MY REVIEWS here // by id
    return {
        type: MAKE_REVIEW,
        review
    };
};

export const changeReview = (review) => {
    //rather do LOAD MY REVIEWS here // by id
    return {
        type: CHANGE_REVIEW,
        review
    };
};

export const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        review
    }
};

//////////////////////////////////////////////////////////////////////
export const getAllReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data.Reviews)
        dispatch(loadAllReviews(data.Reviews));
        return data;
        // return response; changed to data for check
    }
};
export const getOneReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${+id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOneReview(data));
        return data;
        // return response; changed to data for check
    }
};

export const getMyReviews = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadMyReviews(data));
        return data
        // return response; changed to data for check
    }
}


export const createReview = (review) => async (dispatch) => {
    const { address, city, state, country,
        name, description, price } = review;
    let lat = 1
    let lng = 1
    const response = await csrfFetch("/api/reviews", {
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
        // getAllREVIEWs() INSTEAD OF THE MAKE REVIEW FOR UPDATE
        // getOneREVIEW(data.id) INSTEAD OF THE ALL REVIEWS FOR RIGHT PAGE
        dispatch(makeReview(data))
        return data
    }
}
export const makeChangeReview = (review) => async (dispatch) => {
    const { id, address, city, state, country, name, description, price } = review;
    const response = await csrfFetch(`/api/reviews/${id}`, {
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
        dispatch(changeReview(data))
        return data
    }
};


export const makeDeleteReview = (id) => async (dispatch) => {
    // console.log(id)
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(deleteReview(data));
        return data;
    }
}

////REDUCER




const arrConvert = (arr) => {
    let newallState = {}
    for (let sp of arr) newallState[sp.id] = sp
    return newallState
}

const initialState = {}
const reviewsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_ALL_REVIEWS:
            newState.onespot = arrConvert(action.reviews);
            return newState;
        case LOAD_ONE_REVIEW:
            newState.onereview = action.review
            return newState;
        case LOAD_MY_REVIEWS:
            newState.myreviews = arrConvert(action.reviews);
            return newState;

        case MAKE_REVIEW:
            newState.newreview = action.review
            return newState;

        case CHANGE_REVIEW:
            newState.onereview = action.review
            return newState;

        case DELETE_REVIEW:
            let del = action.review.id
            delete newState.reviews[del]
            return newState
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default reviewsReducer;


///////////