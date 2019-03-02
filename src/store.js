import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/'

const initialStatus = { services: [] }

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }
// applyMiddleware(logger, thunk)
export default createStore(reducers, initialStatus, applyMiddleware(thunk))
