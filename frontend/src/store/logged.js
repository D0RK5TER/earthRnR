// import { csrfFetch } from './csrf';

// const CHANGE_A_SPOT = 'logged/makeSpot'
// const MY_SPOTS = 'logged/mySpots'
// const GET_ALL_SPOTS = 'logged/getASpots'
// const SET_USER = 'logged/setUser'
// const DELETE_SPOT = 'logged/deleteSpot'
// const GET_ONE_SPOT = 'logged/loadOneSpot'
// // const SET_REVIW = 'logged/createReview'
// const CREATE_A_SPOT = 'logged/makeSpot'

// // const GET_A_SPOTS = 'session/getASpots'

// export const mySpots = (spots) => {
//     return {
//         type: MY_SPOTS,
//         payload: spots
//     };
// };
// export const loadSpots = (spots) => {
//     return {
//         type: GET_ALL_SPOTS,
//         spots
//     };
// };
// export const loadOneSpot = (spot) => {
//     return {
//         type: GET_ONE_SPOT,
//         spot
//     };

// };
// export const makeSpot = (spot) => {
//     return {
//         type: CREATE_A_SPOT,
//         spot
//     };
// };
// // export const ldSpots = (spots) => {
// //     return {
// //         type: GET_A_SPOTS,
// //         payload: spots
// //     };
// // };

// export const sendChange = (spot) => {
//     return {
//         type: CHANGE_A_SPOT,
//         payload: spot
//     };
// };
// export const setUser = (user) => {
//     return {
//         type: SET_USER,
//         payload: user,
//     };
// };
// export const delSpot = (spot) => {
//     return {
//         type: DELETE_SPOT,
//         payload: spot
//     }
// };
// // export const delReview = () => {
// //     return {
// //         type: SET_REVIW,
// //         // payload: spot
// //     }
// // }

// // export const setReview = (Reviews) => {
// //     return {
// //         type: SET_REVIW,
// //          Reviews
// //     }
// // }
// //////////////////////////////////////////////////////////////////////
// // export const createReview = (newreview) => async (dispatch) => {
// //     const { idxx, review, stars } = newreview;
// //     // console.log(idxx, '!!!!!!!', review, '!!!!', stars)
// //     //console.log(newreview)
// //     const response = await csrfFetch(`/api/spots/${idxx}/reviews`, {
// //         method: "POST",
// //         body: JSON.stringify({
// //             review, stars
// //         }),
// //     });
// //     if (response.ok) {
// //         // console.log(response)
// //         const data = await response.json();
// //         console.log(data, '!!!!!!!!1223123123')
// //         dispatch(setReview(data.Reviews))
// //         console.log(response, '!!!!!!!')

// //         return response
// //     }
// // };
// export const deleteSpot = (id) => async (dispatch) => {
//     // console.log(id)

//     const response = await csrfFetch(`/api/spots/${id}`, {
//         method: 'DELETE',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(delSpot(data));
//         return response;
//     }
// }
// // export const deleteReview = (id) => async (dispatch) => {

// //     const response = await csrfFetch(`/api/reviews/${id}/`, {
// //         method: 'DELETE',
// //     });
// //     //console.log(response)
// //     if (response.ok) {
// //         const data = await response.json();
// //         dispatch(delReview(data));
// //         return response;
// //     }
// // }



// export const getMySpots = () => async (dispatch) => {
//     const response = await csrfFetch('/api/spots/current', {
//         method: 'GET',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         // console.log(data)
//         dispatch(mySpots(data));
//         return response;
//     }
// }
// export const getOneSpot = (id) => async (dispatch) => {
//     // const { id } = spot
//     // console.log(id, 'please be purple')
//     const response = await csrfFetch(`/api/spots/${+id}`, {
//         method: 'GET',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         // console.log(data)
//         dispatch(loadOneSpot(data));
//         return response;
//     }
// };

// export const changeSpot = (spot) => async (dispatch) => {
//     const { id, address, city, state, country, name, description, price } = spot;
//     let spotId = {}
//     //console.log(id)
//     const response = await csrfFetch(`/api/spots/${id}`, {
//         method: "PUT",
//         body: JSON.stringify({
//             address,
//             city,
//             state,
//             country,
//             lat: 1,
//             lng: 1,
//             name,
//             description,
//             price
//         }),
//     });
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(sendChange(data))
//         return response
//     }
// };

// export const restUser = () => async dispatch => {
//     const response = await csrfFetch('/api/session');
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };
// export const getASpots = () => async (dispatch) => {
//     const response = await csrfFetch('/api/spots', {
//         method: 'GET',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(loadSpots(data));
//         return response;
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
//     //console.log(response)
//     // const thing = {}
//     if (response.ok) {
//         // console.log(data)
//         let data = await response.json()
//         // console.log(data, '!!!jhbjhbjhb', response)
//         dispatch(makeSpot(data))

//         return response

//         // return  response
//         // console.log(data)
//         // thing.id = data.id;
//         // dispatch(makeSpot(data))
//         // thing.url = latt;
//         // let newresponse = await dispatch(createImage(thing))
//         // console.log(newresponse)
//         // return response
//     }
// }
// const initialState = {};
// ////REDUCER
// const loggedReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         // case SET_USER:
//         //     newState = Object.assign({}, state);
//         //     newState.user = action.payload;
//         //     return newState;
//         // case SET_REVIW:
//         //     newState = Object.assign({}, state);
//         //     console.log(newState)
//         //     newState.Reviews = action.Reviews
//         //     console.log(newState)
//         // return newState;
//         case GET_ALL_SPOTS:
//             newState = { ...state }
//             newState.spots = (action.spots);
//             // (newState)
//             return newState;
//         case GET_ONE_SPOT:
//             newState = { ...state }
//             // newState.spot ? newState.onespot.push((action.payload)) :
//             newState.onespot = action.spot
//             // console.log(newState)
//             return newState;
//         case CHANGE_A_SPOT:
//             newState = Object.assign({}, state);
//             // console.log(newState)
//             // newState.push(action.payload)
//             return newState;
//         case MY_SPOTS:
//             newState = { ...state }
//             newState.myspots = (action.payload);
//             return newState;
//         case DELETE_SPOT:
//             newState = Object.assign({}, state);
//             newState.spots = (action.payload);
//             //console.log(newState)
//             return newState;
//         case CREATE_A_SPOT:
//             newState = Object.assign({}, state);
//             //console.log(newState)
//             newState.spots.push(action.spot)
//             //console.log(newState)
//             return newState;
//         default:
//             return state;
//     }
// };
// /////// /////// /////// ///////changed above payload while tired /////// ///////
// export default loggedReducer;


// ///////////