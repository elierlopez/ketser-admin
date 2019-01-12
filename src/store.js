import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers/index'
import thunk from 'react-thunk'

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
export default createStore(reducers, applyMiddleware(logger, thunk))
