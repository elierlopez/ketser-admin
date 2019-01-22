import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_SERVICES) {
        return action.services
    }
    else if (action.type === actionType.SAVE_SERVICE) {
        state.map(sv => {
            if (sv.Id === action.Id) {
                return Object.assign({}, action)
            }
            return sv
        })
    }
    return state
}