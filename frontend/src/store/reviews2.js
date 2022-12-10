import { csrfFetch } from './csrf';
import { getMySpots, getOneSpot } from './spots2';
const LOAD_ALL_REVIEWS = 'reviews2/loadAllReviews'
const LOAD_ONE_REVIEW = 'reviews2/loadOneReview'
const LOAD_MY_REVIEWS = 'reviews2/loadMyReviews'

const MAKE_REVIEW = 'reviews/makeReview'
const CHANGE_REVIEW = 'reviews/changeReview'

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

// export const 

export const changeReview = (review) => {
    //rather do LOAD MY REVIEWS here // by id
    return {
        type: CHANGE_REVIEW,
        review
    };
};


//////////////////////////////////////////////////////////////////////
export const getAllReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = await response.json();
        await dispatch(loadAllReviews(data.Reviews));
        return data;
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
    // console.log(response, '!!!!!')
    if (response.ok) {
        const data = await response.json();
        // console.log(data, '!!!!!')
        await dispatch(loadMyReviews(data.Reviews))
        return data.Reviews
    }
}


export const createReview = (reviewz) => async (dispatch) => {
    const { review, stars, id } = reviewz;
    // console.log(review)
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review, stars
        }),
    })
    if (response.ok) {
        //  dispatch(getOneSpot(id))
        //  dispatch(getAllReviews(id))
        let data = await response.json()
        await dispatch(getOneSpot(id))
        await dispatch(getAllReviews(id))
        return data
    }
}

export const makeChangeReview = (rev) => async (dispatch) => {
    const { id, stars, review } = rev;
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review, stars
        }),
    });
    if (response.ok) {
        const data = await response.json();
       await dispatch(getMyReviews())
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
        if (place) await dispatch(getMyReviews())
        else {
            await dispatch(getOneSpot(spotId))
            await dispatch(getAllReviews(spotId))
        }
        return data
    }
}

////REDUCER




const arrConvert = (arr) => {
    // console.log(arr)
    // if (!arr) return
    let newallState = {}
    for (let sp of arr) newallState[sp?.id] = sp
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
            // console.log(a)
            newState.myreviews = arrConvert(action.myreviews);
            return newState;
        case CHANGE_REVIEW:
            let edited = action.review
            // newState.allreviews[edited.id] = edited
            newState.myreviews[edited.id] = edited
            return newState;
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default reviewsReducer;


///////////