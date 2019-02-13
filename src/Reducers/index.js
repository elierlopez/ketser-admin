import { combineReducers } from 'redux'
import serviceReducer from './serviceReducer'
import personReducer from './personReducer'

export default combineReducers({ services: serviceReducer, persons: personReducer })