// import { csrfFetch } from './csrf';
// // import quest from '../assets/quest.jpg';
// // import { createImage } from './review';
// const SET_USER = 'session/setUser';
// const REMOVE_USER = 'session/removeUser';
// // const GET_ALL_SPOTS = 'session/getAllSpots'
// // const CREATE_A_SPOT = 'session/createSpot'
// const MY_SPOTS = 'session/mySpots'
// ///////ACTIONS////////
// export const setUser = (user) => {
//     return {
//         type: SET_USER,
//         payload: user,
//     };
// };

// export const removeUser = () => {
//     return {
//         type: REMOVE_USER,
//     };
// };
// export const mySpots = (spots) => {
//     return {
//         type: MY_SPOTS,
//         payload: spots
//     };
// };

// // export const loadSpots = (spots) => {
// //     return {
// //         type: GET_ALL_SPOTS,
// //         payload: spots
// //     };
// // };


// // export const makeSpot = (spot) => {
// //     return {
// //         type: CREATE_A_SPOT,
// //         payload: spot
// //     };
// // };
// //THUNKS/////////

// // export const getMySpotsFAIL = () => async (dispatch) => {
// //     const response = await csrfFetch('/api/spots/current', {
// //         method: 'GET',
// //     });
// //     // console.log(response)
// //     if (response.ok) {
// //         const data = await response.json();
// //         dispatch(mySpots(data));
// //         return response;
// //     }
// // }

// // export const getAllSpots = () => async (dispatch) => {
// //     const response = await csrfFetch('/api/spots', {
// //         method: 'GET',
// //     });
// //     if (response.ok) {
// //         const data = await response.json();
// //         dispatch(loadSpots(data));
// //         return response;
// //     }
// // };
// // export const createSpot = (spot) => async (dispatch) => {
// //     const { user, address, city, state, country,
// //         name, description, price, latt } = spot;
// //     // let preview = true
// //     let lat = 1
// //     let lng = 1
// //     // console.log(latt)
// //     const response = await csrfFetch("/api/spots", {
// //         method: "POST",
// //         body: JSON.stringify({
// //             address,
// //             city,
// //             state,
// //             country,
// //             lat: 1,
// //             lng: 1,
// //             name,
// //             description,
// //             price,
// //             user
// //         }),
// //     })
// //     //console.log(response)
// //     const thing = {}
// //     if (response.ok) {
// //         const data = await response.json()
// //         return dispatch(createImage(url, id))
// //         // console.log(data)
// //         // thing.id = data.id;
// //         // thing.url = latt;
// //         // let newresponse = await dispatch(createImage(thing))
// //         // console.log(newresponse)
// //     }
// //     // return response
// // }
// // console.log(response)
// //     dispatch(makeSpot(idd)).then(
// //         await csrfFetch(`/api/spots/${idd.id}/images`, {
// //             method: "POST",
// //             body: JSON.stringify({
// //                 url: latt,
// //                 preview: true
// //             }),

// //         }).then(() => response)
// //     )

// // }
// // if (response.ok) {
// //     //     csrfFetch(`/api/spots/${idd.id}/images`, {
// //     //        method: "POST",
// //     //        body: JSON.stringify({
// //     //            url: latt,
// //     //            preview: true
// //     //        }),
// //     //    })
// //     //     let idd = await response.json();
// //     // const data = await response.json();
// //     //     // let newww = await dispatch(makeSpot(data))
// //     //     // console.log(data2, idd)
// //     const data = await response.json();

// //     dispatch(makeSpot(data))
// // return response


// // }
// // console.log(response2, data)
// // if (response2.ok) {
// // let data2 = await response2.json()
// // data.previewImage = data2.url
// // }


// // return response
// // }
// // }





// // }})
// // }
// // // if (response.ok) {
// // // const data = await response.json();
// // console.log(data)
// //         // }

// //     )
// // // console.log(response)
// // // dispatch(makeSpot(data))
// // // console.log(response2)
// // // if (response2.ok) {
// // // const data = await response.json();
// // dispatch(makeSpot(data))
// // return response
// // }
// // data.previewImage = './assets/quest.jpg'
// // console.log(data, response)
// // }
// // };

// export const login = (user) => async (dispatch) => {
//     const { credential, password } = user;
//     const response = await csrfFetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify({
//             credential,
//             password,
//         }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };

// export const logout = () => async (dispatch) => {
//     const response = await csrfFetch('/api/session', {
//         method: 'DELETE',
//     });
//     await dispatch(removeUser())
//     return response;
// };

// export const signup = (user) => async (dispatch) => {
//     const { firstName, lastName, email, password, username } = user;
//     const response = await csrfFetch("/api/users", {
//         method: "POST",
//         body: JSON.stringify({
//             firstName,
//             lastName,
//             email,
//             password,
//             username,
//         }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };

// export const restoreUser = () => async dispatch => {
//     const response = await csrfFetch('/api/session');
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };






// ///state
// // const prevState = 
// // const prevState = useSelector(state => state = state)
// const initialState = { user: null };
// ////REDUCER
// const sessionReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case SET_USER:
//             const { user, ...rest } = state
//             newState = {...rest}
//             newState.user  = action.payload
//             // console.log(newState, '!!!!!!!')
//             // newState = Object.assign({}, state);
//             // newState.user = action.payload;
//             return newState;
//         case REMOVE_USER:
//             newState = Object.assign({}, state);
//             newState.user = null;
//             return newState;
//         // case GET_ALL_SPOTS:
//         //     newState = { ...state }
//         //     newState.spots = action.payload;
//         //     return newState;
//         // case CREATE_A_SPOT:
//         //     newState = Object.assign({}, state);
//         //     //console.log(newState)
//         //     newState.spots.push(action.spot)
//         //     //console.log(newState)
//         //     return newState;
//         case MY_SPOTS:
//             newState = { ...state }
//             newState.currentSpots = (action.payload);
//             return newState;
//         default:
//             return state;
//     }
// };
// /////// /////// /////// ///////changed above payload while tired /////// ///////
// export default sessionReducer;