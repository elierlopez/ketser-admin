import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/'

const initialStatus = { services: [] }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
// applyMiddleware(logger, thunk)
export default createStore(reducers, initialStatus, composeEnhancers(applyMiddleware(logger, thunk)))
