import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const getToken = credentials => {
    console.log('entro el get token action')
    console.log(credentials)
    return dispatch => {
        return axios.post(url.GetToken, credentials)
            .then(response => {
                dispatch({
                    type: types.GET_TOKEN,
                    token: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetToken}`))
    }
}

const createUser = () => {
    return dispatch => {
        return axios.get(url.CreateUser)
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