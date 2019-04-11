import { combineReducers } from 'redux'
import serviceReducer from './serviceReducer'
import personReducer from './personReducer'
import authReducer from './authReducer'

export default combineReducers({ services: serviceReducer, persons: personReducer, auth: authReducer })