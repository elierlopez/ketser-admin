import axios from 'axios'
import * as types from './types'
import * as url from '../Constants/backendUrl'

const addQuote = quote => {
    const access_token = localStorage.getItem('token')
    const config = { headers: { Authorization: `Bearer ${access_token}` } };
    return dispatch => {
        dispatch({ type: types.ADD_QUOTE_START })
        return axios.post(url.SaveQuote, quote, config)
            .then(response => {
                dispatch({
                    type: types.ADD_QUOTE_SUCCESS,
                    quote: response.data
                })
            })
            .catch(err => console.log(`$Issues calling ${url.SaveQuote} --> ${err}`))
    }
}

export { addQuote }