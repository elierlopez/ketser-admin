import * as actionType from '../Actions/types'

const serviceReducer = (state = [], action) => {
    if (action.type == actionType.GET_SERVICES) {
        return action.services
    }
    return state
}

export default serviceReducer