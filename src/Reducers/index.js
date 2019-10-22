import { combineReducers } from 'redux'
import serviceReducer from './serviceReducer'
import personReducer from './personReducer'
import projectReducer from './projectReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import professionalReducer from './professionalReducer'

export default combineReducers({
    services: serviceReducer,
    persons: personReducer,
    projects: projectReducer,
    professionals: professionalReducer,
    auth: authReducer,
    app: appReducer
})