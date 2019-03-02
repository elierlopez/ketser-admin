import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const replacePersons = () => {
    return dispatch => {
        return axios.get(url.GetAllPersons)
            .then(response => {
                dispatch({
                    type: types.GET_PERSONS,
                    persons: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetAllPersons}`))
    }
}

const savePerson = person => {
    return dispatch => {
        return axios.post(url.SavePerson, person)
            .then(response => {
                dispatch({
                    type: types.SAVE_PERSON,
                    person: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.SavePerson}`))
    }
}

export { replacePersons, savePerson }