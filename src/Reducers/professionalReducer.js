import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_PROFESSIONALS_SUCCESS) {
        return action.professionals
    }

    return state
}