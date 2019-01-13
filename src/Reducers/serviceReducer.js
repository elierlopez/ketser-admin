import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_SERVICES) {
        return action.services
    }
    return state
}