import { csrfFetch } from './csrf';


const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

///////ACTIONS////////
export const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};




///THUNKS////
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    await dispatch(removeUser())
    return response;
};

export const signup = (user) => async (dispatch) => {

    const { firstName, lastName, email, password, username } = user;

    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            firstName, lastName, email, password, username,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    // console.log(data)
    dispatch(setUser(data.user));
    return response;
};


///selector
export const getSessionUser = (state) => state.session.user;

const initialState = {}
const sessionReducer = (state = initialState, action) => {
    let newState = { ...state };
    // console.log(state, newState)
    switch (action.type) {
        case SET_USER:
            // const { user, ...rest } = state
            // newState = { ...rest }
            newState.user = action.user
            return newState;
        case REMOVE_USER:
            // newState = { ...state }
            newState.user = null
            return newState;
        default:
            return state;
    }
};
/////// /////// /////// ///////changed above payload while tired /////// ///////
export default sessionReducer;