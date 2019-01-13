import axios from 'axios'
import * as types from './types'
// import * as url from './backendUrl'

export const replaceServices = () => {
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

// export { replaceServices }

// export const replaceServices = () => {
//     const services =
//         [
//             { id: 1, name: "Hipster Ultimate", image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
//             { id: 2, name: "On Motion Live", image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
//             { id: 3, name: "Underground Max", image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
//         ]
//     return {
//         type: types.GET_SERVICES,
//         services: services
//     }
// }