import axios from 'axios'
import * as types from './types'
import * as url from '../Constants/backendUrl'

// action creators ----------------------------------
const authStart = () => {
    return {
        type: types.GET_TOKEN_START
    }
}

const authFail = error => {
    return {
        type: types.GET_TOKEN_FAIL,
        error: error
    }
}

const authSuccess = token => {
    return {
        type: types.GET_TOKEN_SUCCESS,
        token: token
    }
}

const authLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: types.AUTH_LOGOUT
    }
}

const setAppStatus = status => {
    return {
        type: types.SET_APP_STATUS,
        isInitialized: status
    }
}

// ----------------------------------------------------------
// local functions ------------------------------------------
const setAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogOut());
        }, expirationTime * 1000);
    };
};
// ---------------------------------------------------------------------


// public action Dispatchers -------------------------------------------
export const authCheckStatus = () => {
    return dispatch => {
        const access_token = localStorage.getItem('token')
        const expirationDateLS = localStorage.getItem('expirationDate')
        const expirationDate = expirationDateLS ? new Date(expirationDateLS) : null

        if (access_token && expirationDate > new Date()) {
            dispatch(authSuccess({ token: access_token }))
            dispatch(setAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
        else {
            dispatch(authLogOut())
        }

        dispatch(setAppStatus(true))
    }
}

export const getToken = credentials => {
    return dispatch => {
        dispatch(authStart())
        return axios.post(url.GetToken, credentials)
            .then(response => {
                //lets save our logged user as well here
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('expirationDate', new Date(new Date().getTime() + response.data.expires_in * 1000))
                dispatch(authSuccess(response.data))
                dispatch(setAuthTimeout(response.data.expires_in));
            })
            .catch(err => {
                dispatch(authFail(err.response.data));
            })
    }
}

export const logOut = () => {
    return dispatch => {
        dispatch(authLogOut())
    }
}

export const createUser = user => {
    return dispatch => {
        return axios.post(url.CreateUser, user)
            .then(response => {
                dispatch({
                    type: types.CREATE_USER,
                    user: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.CreateUser}`))
    }
}

// ----------------------------------------------------------------
