import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const getToken = credentials => {
    const config = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    }
    return dispatch => {
        return axios.post(url.GetToken, credentials, config)
            .then(response => {
                dispatch({
                    type: types.GET_TOKEN,
                    token: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetToken}`))
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