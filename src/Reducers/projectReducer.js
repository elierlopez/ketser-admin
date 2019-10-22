import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_PROJECTS) {
        return action.projects
    }
    else if (action.type === actionType.SAVE_PROJECT) {
        const stateCopy = [...state]
        const index = state.findIndex(i => i.Id === action.project.Id)
        if (index > -1) {
            stateCopy[index] = action.project
            return stateCopy
        }
    }
    else if (action.type === actionType.ADD_QUOTE_SUCCESS) {
        const stateCopy = [...state]
        const indexProj = state.findIndex(i => i.Id === action.quote.ProjectId)
        stateCopy[indexProj].Quotes = [...stateCopy[indexProj].Quotes, action.quote]
        return stateCopy
    }

    return state
}
