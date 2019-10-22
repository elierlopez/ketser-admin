import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const loadProfessionals = () => {
    const access_token = localStorage.getItem('token')
    const config = { headers: { Authorization: `Bearer ${access_token}` } };
    return dispatch => {
        dispatch({ type: types.GET_PROFESSIONALS_START })
        return axios.get(url.GetProfessionals, config)
            .then(response => {
                dispatch({
                    type: types.GET_PROFESSIONALS_SUCCESS,
                    professionals: response.data
                })
            })
            .catch(err => console.log(`$Issues calling ${url.GetProfessionals} --> ${err}`))
    }
}


export { loadProfessionals }