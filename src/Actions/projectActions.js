import axios from 'axios'
import * as types from './types'
import * as url from '../Constants/backendUrl'

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
            .catch(err => console.log(`Issues calling ${url.GetAllProjects} --> ${err}`))
    }
}

const saveProject = project => {
    return dispatch => {
        dispatch({ type: types.SAVE_PROJECT_START })
        return axios.post(url.SaveProject, project)
            .then(response => {
                dispatch({
                    type: types.SAVE_PROJECT_SUCCESS,
                    project: response.data
                })
            })
            .catch(() => console.log(`Issues calling ${url.SaveProject}`))
    }
}

export { replaceProjects, saveProject }