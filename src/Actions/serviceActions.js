import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const replaceServices = () => {
    return dispatch => {
        return axios.get(url.GetAllServices)
            .then(response => {
                dispatch({
                    type: types.GET_SERVICES,
                    services: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetAllServices}`))
    }
}

const saveService = service => {
    return dispatch => {
        return axios.post(url.Save_Service, service)
            .then(response => {
                dispatch({
                    type: types.SAVE_SERVICE,
                    service: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.Save_Service}`))
    }
}

export { replaceServices, saveService }