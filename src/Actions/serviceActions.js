import axios from 'axios'
import * as types from './types'
// import * as url from './backendUrl'

 const replaceServices = () => {
    return dispatch => {
        return axios.get('http://localhost:3001/services')
            .then(response => {
                dispatch({
                    type: types.GET_SERVICES,
                    services: response.data
                })
            })

    }
}

 export { replaceServices }