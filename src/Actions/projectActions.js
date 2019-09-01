import axios from 'axios'
import * as types from './types'
import * as url from './backendUrl'

const replaceProjects = () => {
    const access_token = localStorage.getItem('token')
    const config = { headers: { Authorization: `Bearer ${access_token}` } };
    return dispatch => {
        return axios.get(url.GetAllProjects, config)
            .then(response => {
                dispatch({
                    type: types.GET_PROJECTS,
                    projects: response.data
                })
            })
            .catch(err => console.log(`$Issues calling ${url.GetAllProjects} --> ${err}`))
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