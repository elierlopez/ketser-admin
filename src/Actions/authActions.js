import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

export const authStart = () => {
    return {
        type: types.GET_TOKEN_START
    }
}

export const authFail = error => {
    return {
        type: types.GET_TOKEN_FAIL,
        error: error
    }
}

export const authSuccess = token => {
    return {
        type: types.GET_TOKEN_SUCCESS,
        token: token
    }
}

const getToken = credentials => {
    return dispatch => {
        dispatch(authStart())
        return axios.post(url.GetToken, credentials)
            .then(response => {
                dispatch(authSuccess(response.data))
            })
            .catch(err => {                
                dispatch(authFail(err.response.data));
            })
    }
}

const createUser = user => {
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

export { getToken, createUser }