import { combineReducers } from 'redux'
import serviceReducer from './serviceReducer'
import personReducer from './personReducer'
import projectReducer from './projectReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'

export default combineReducers({
    services: serviceReducer,
    persons: personReducer,
    projects: projectReducer,
    auth: authReducer,
    app: appReducer
})