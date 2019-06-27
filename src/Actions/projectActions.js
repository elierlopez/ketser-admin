import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const replaceProjects = () => {
    return dispatch => {
        return axios.get(url.GetAllProjects)
            .then(response => {
                dispatch({
                    type: types.GET_PROJECTS,
                    projects: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.GetAllProjects}`))
    }
}

const saveProject = person => {
    return dispatch => {
        return axios.post(url.SaveProject, person)
            .then(response => {
                dispatch({
                    type: types.SAVE_PROJECT,
                    project: response.data
                })
            })
            .catch(() => console.log(`$Issues calling ${url.SaveProject}`))
    }
}

export { replaceProjects, saveProject }