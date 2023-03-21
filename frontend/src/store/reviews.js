import { csrfFetch } from './csrf';
import { getOneSpot } from './spots';
const LOAD_ALL_REVIEWS = 'reviews/loadAllReviews'
const LOAD_ONE_REVIEW = 'reviews/loadOneReview'
const LOAD_MY_REVIEWS = 'reviews/loadMyReviews'

const ADD_ONE_REVIEW = 'reviews/addOneReview'
const CHANGE_REVIEW = 'reviews/changeReview'

//////// ACTIONS /////////// ACTIONS ////////////
export const loadAllReviews = (reviews) => {
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

export const addOneReview = (review) => {
    //rather do LOAD MY REVIEWS here // by id
    return {
        type: ADD_ONE_REVIEW,
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
    if (response.ok) {
        const data = await response.json();
        await dispatch(loadMyReviews(data.Reviews))
        return data.Reviews
    }
}


export const createReview = (reviewz) => async (dispatch) => {
    const { id, review, stars, cleanliness, communication,
        location, checkin, value, accuracy } = reviewz;
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review, stars,
            cleanliness, communication,
            location, checkin,
            value, accuracy
        }),
    })
    if (response.ok) {
        let data = await response.json()
        await dispatch(getOneSpot(id))
        await dispatch(getAllReviews(id))
        return data
    }
}

export const makeChangeReview = (rev) => async (dispatch) => {
    const { id,
        review, stars,
        cleanliness, communication,
        location, checkin,
        value, accuracy, spotId
    } = rev;
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review, stars,
            cleanliness, communication,
            location, checkin,
            value, accuracy
        }),
    });
    if (response.ok) {
        let data = await response.json()
        await dispatch(getOneSpot(spotId))
        await dispatch(getAllReviews(spotId))
        return data
    }
};


export const makeDeleteReview = (rev) => async (dispatch) => {
    const { review, id } = rev;
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        let data = await response.json()
        await dispatch(getOneSpot(id))
        await dispatch(getAllReviews(id))
        return data

    }
}
////REDUCER




const arrAdd = (arr, oldstate) => {
    for (let r of arr) oldstate[r.id] = r
    return oldstate
}
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
            let revs = action.reviews
            newState.allreviews = arrConvert(revs)
            return newState;
        case ADD_ONE_REVIEW:
            let review = action.review
            newState.allreviews ? newState.allreviews[review.id] = review :
                newState.allreviews = { [review.id]: review }
            newState.myreviews ? newState.myreviews[review.id] = review :
                newState.myreviews = { [review.id]: review }
            return newState;
        case LOAD_MY_REVIEWS:
            let myrevs = action.myreviews
            let allold = { ...newState?.allreviews }
            newState.myreviews = arrConvert(myrevs);
            newState.allreviews = arrAdd(myrevs, allold)
            return newState;
        case CHANGE_REVIEW:
            let edited = action.review
            if (edited[1] === 'edit') {
                newState.allreviews[edited[0].id] = edited
                newState.myreviews[edited[0].id] = edited
                return newState;
            } else {
                newState.allreviews[edited[0].id] = {}
                newState.myreviews[edited[0].id] = {}

                return newState
            }
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default reviewsReducer;


///////////