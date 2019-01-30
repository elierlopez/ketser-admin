import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_SERVICES) {
        return action.services
    }
    else if (action.type === actionType.SAVE_SERVICE) {
        const stateCopy = [...state]
        const index = state.findIndex(i => i.Id === action.service.Id)
        if (index > -1) {
            stateCopy[index] = action.service
            return stateCopy
        }
    }
    return state
}