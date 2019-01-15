import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const replaceServices = () => {
    return dispatch => {
        var config = {
            crossdomain: true 
        }
        return axios.get(url.GetAllServices, config)
            .then(response => {
                dispatch({
                    type: types.GET_SERVICES,
                    services: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetAllServices}`))
    }
}

export { replaceServices }