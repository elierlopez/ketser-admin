import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_PERSONS) {
        return action.users
    }
    else if (action.type === actionType.SAVE_PERSON) {
        const stateCopy = [...state]
        const index = state.findIndex(i => i.Id === action.person.Id)
        if (index > -1) {
            stateCopy[index] = action.person
            return stateCopy
        }
    }
    return state
}