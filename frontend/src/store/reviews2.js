import { csrfFetch } from './csrf';
import { getMySpots, getOneSpot } from './spots2';
const LOAD_ALL_REVIEWS = 'reviews2/loadAllReviews'
const LOAD_ONE_REVIEW = 'reviews2/loadOneReview'
const LOAD_MY_REVIEWS = 'reviews2/loadMyReviews'

const MAKE_REVIEW = 'reviews/makeReview'
const CHANGE_REVIEW = 'reviews/changeReview'
const DELETE_REVIEW = 'reviews/deleteReview'

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
export const loadMyReviews = (myreviews) => {
    return {
        type: LOAD_MY_REVIEWS,
        myreviews
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

export const deleteReview = () => {
    // console.log(review)
    return {
        type: DELETE_REVIEW,
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
    let spots = {}
    const response = await csrfFetch('/api/reviews/current', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(loadMyReviews(data.Reviews))
        return data.Reviews
    }
}


export const createReview = (reviewz) => async (dispatch) => {
    const { review, stars, id } = reviewz;
    let lat = 1
    let lng = 1
    // console.log(review)
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review, stars
        }),
    })
    if (response.ok) {
        let data = await response.json()
        // switched action and reducer for ezload
        // return
        dispatch(getOneSpot(id)).then(getAllReviews(id))
        // dispatch(getAllReviews(id)).then(dispatch(getOneSpot(id)))
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


export const makeDeleteReview = ({ id, spotId, place }) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        if (place) dispatch(getMyReviews())
        else {
          dispatch(getAllReviews(spotId)).then(dispatch(getOneSpot(spotId)))
            //  dispatch(getOneSpot(spotId))
        }
        // .then(dispatch(getOneSpot(spotId)))
        return data
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

            newState.allreviews = arrConvert(action.reviews);
            return newState;
        case LOAD_ONE_REVIEW:
            newState.onereview = action.review
            return newState;
        case LOAD_MY_REVIEWS:
            newState.myreviews = arrConvert(action.myreviews);
            return newState;
        case CHANGE_REVIEW:
            newState.onereview = action.review
            return newState;

        case DELETE_REVIEW:
            // let del = action.review.id
            // delete newState.reviews[del]
            return newState
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default reviewsReducer;


///////////