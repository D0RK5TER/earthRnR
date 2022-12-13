import { csrfFetch, restoreCSRF } from './csrf';
import { getMySpots, getOneSpot } from './spots2';
const LOAD_ALL_REVIEWS = 'reviews2/loadAllReviews'
const LOAD_ONE_REVIEW = 'reviews2/loadOneReview'
const LOAD_MY_REVIEWS = 'reviews2/loadMyReviews'

const ADD_ONE_REVIEW = 'reviews/addOneReview'
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
    console.log(review)
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
    const { id, review } = rev;
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review: review.review,
            stars: review.stars
        }),
    });
    if (response.ok) {
        let data = await response.json()
        await dispatch(getOneSpot(id))
        await dispatch(getAllReviews(id))
        return data
    }

    // else {
    //     const response = await csrfFetch(`/api/reviews/${id}`, {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     if (response.ok) {
    //         const data = await response.json();
    //         dispatch(getOneSpot(spotId))
    //         await dispatch(makeChangeReview([rev, 'delete']))
    //         return response
    //     }
    // }
};

// export const makeDeleteSpot = (obj2) => async (dispatch) => {
//     const { id, place } = obj2
//     const response = await csrfFetch(`/api/reviews/${id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//         place ? dispatch(getAllReviews()) : dispatch(getAllSpots())
//     }
// }

//////////
// export const makeDeleteReview = (rev) => async (dispatch) => {
//     const { id, spotId } = rev;

//     const response = await csrfFetch(`/api/reviews/${id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//         // const data = await response.json();
//         // const data = await response.json();
//         let data = await response.json()
//         // dispatch(getOneSpot(spotId))
//         dispatch(getMyReviews()).then(getAllReviews(spotId))
//         // return response
//         // await getAllReviews(spotId)
//         // dispatch(getAllReviews(spotId))
//         // return await dispatch(getOneSpot(spotId))
//         // await dispatch(getAllReviews(spotId))
//         // .then(dispatch(getOneSpot(spotId)))

//         // return await dispatch(getOneSpot(spotId))
//         // await dispatch(makeChangeReview(['delete', id]))
//         // await dispatch(makeChangeReview(['delete', id]))

//     }
// }


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
        // const data = await response.json();
        // if (place) await dispatch(getMyReviews())
        // else {
        //     await dispatch(getOneSpot(spotId))
        //     await dispatch(getAllReviews(spotId))
        // }
        // return data
    }
}
////REDUCER




// const arrConvert = (arr, obj) => {
const arrAdd = (arr, oldstate) => {
    console.log(oldstate, arr)
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
    // console.log(newState)
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
            // console.log(edited, 'klsdfksdnfksjdnf')
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