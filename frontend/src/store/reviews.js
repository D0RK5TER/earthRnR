
import { csrfFetch } from './csrf';

// const ADD_IMG = 'reviews/addSpotImg'
// const CREATE_A_SPOT = 'reviews/createSpot'
const SET_REVIEW = 'reviews/createReview'
// const GET_ALL_REVIEWS = 'reviews/getAllReviews'
const DEL_REVIEW = 'reviews/deleteReview'





export const delReview = (id) => {
    return {
        type: DEL_REVIEW,
        id
    }
}

export const oneReview = (review) => {
    // console.log(review)
    return {
        type: SET_REVIEW,
        review
    }
}




// export const loadAllReviews = (reviews) => {
//     // let reviews = reviewss.Reviews
//     // (reviews)
//     return {
//         type: GET_ALL_REVIEWS,
//         reviews
//     };
// };

export const getAllReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: 'GET',
    });
    // console.log(response)
    if (response.ok) {
        const data = await response.json();
        // console.log(data, 'BEFORE LOAD REVIEWS!!!')
        dispatch(loadAllReviews(data.reviews));
        return response;
    }
};




export const deleteReview = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${id}/`, {
        method: 'DELETE',
    });
    //console.log(response)
    if (response.ok) {
        const data = await response.json();
        dispatch(delReview(id));
        return response;
    }
}
export const createReview = (newreview) => async (dispatch) => {
    const { id, review, stars } = newreview;
    // console.log(idxx, '!!!!!!!', review, '!!!!', stars)
    // console.log(id, review, stars, '***************8')///////missing headers Content-Type: application/json
    const response = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: "POST",
        body: JSON.stringify({
            review, stars
        }),
    });
    // console.log(response, 'RESPONSE FROM CREATE')
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(oneReview(data));
        return response;
    }
    // }
};


const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case SET_REVIEW:
            newState.reviews = [...state]
            // console.log(newState)
            newState.reviews.push(action.review)
            // newState.reviews.push(action.Reviews)
            // const { reviews, ...rest } = state
            // console.log(newState, '!!!jacobs sodl!!')

            // newState.reviews = [action.reviews, ...reviews]
            // newState = { rest, ...newState }
            return newState
        case GET_ALL_REVIEWS:
            const { reviews, ...rest } = state
            // console.log(action)
            // state
            newState = { ...rest }
            let newrevs = action.reviews
            // console.log(newState, newrevs)
            newState = newrevs
            // if (state?.reviews) newState.reviews.push(state.reviews)
            // console.log(newState, '!!!!!!sjahgdajsdajhdbajsdb')

            return newState
        case DEL_REVIEW:
            newState = Object.assign({}, state)
            newState.reviews = newState.reviews.filter(x => x !== action.id)
            return newState
        // case SET_REVIW:
        // console.log(newS2tate, '12312312312321')
        // newState = Object.assign({}, state);
        // newState.reviews.push(action.Reviews)
        // console.log(newState)
        // return newState;
        // case GET_ALL_REVIEWS:
        //     newState = { ...state }
        //     console.log(newState)
        //     console.log(newState.reviews, '!!!!!!!')
        //     // newState.reviews.concat(action)
        //     return newState;
        // case ADD_IMG:
        //     newState = Object.assign({}, state);
        //     return newState;

        default:
            return state;
    }
};

export default reviewReducer;







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const addSpotImg = (img) => {
//     return {
//         type: ADD_IMG,
//         payload: img
//     };
// };
// export const makeSpot = (spot) => {
//     return {
//         type: CREATE_A_SPOT,
//         payload: spot
//     };
// };
// ////////////////

// export const createImage = (img) => async (dispatch) => {
//     const { id, url } = img
//     let preview = true
//     //console.log(img, id)
//     const response = await csrfFetch(`/api/spots/${id}/images`, {
//         method: "POST",
//         body: JSON.stringify({
//             url: img.url,
//             preview
//         }),
//     });
//     if (response.ok) {
//         // const data = await response.json();
//         // console.log(data)
//         // dispatch(addSpotImg())
//         return response
//     }
// };

// export const createSpot = (spot) => async (dispatch) => {
//     const { user, address, city, state, country,
//         name, description, price, latt } = spot;
//     // let preview = true
//     let lat = 1
//     let lng = 1
//     // console.log(latt)
//     const response = await csrfFetch("/api/spots", {
//         method: "POST",
//         body: JSON.stringify({
//             address,
//             city,
//             state,
//             country,
//             lat: 1,
//             lng: 1,
//             name,
//             description,
//             price,
//             user
//         }),
//     })
//     // console.log(response)
//     // const thing = {}
//     if (response.ok) {
//         // console.log(data)
//         let data = await response.json()
//         //console.log(data)
//         let id = data.id
//         let url = latt.toString()
//         // console.log(url)
//         return await dispatch(createImage({ id, url }))
//         // console.log(response)
//     }
// }