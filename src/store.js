import { createStore, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
// import reducers from './Reducers/'
import * as actionType from './Actions/types'


const serviceReducer = (state = [], action) => {
    if (action.type === actionType.GET_SERVICES) {
        return {
            ...state,
            services: action.services
        }
    }
    return state
}

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
export default createStore(serviceReducer, { services: [] }, applyMiddleware(logger, thunk))
