import * as actionType from '../Actions/types'

export default function (state = [], action) {
    if (action.type === actionType.GET_PROJECTS_SUCCESS) {
        return action.projects
    }
    else if (action.type === actionType.SAVE_PROJECT_SUCCESS) {
        let stateCopy = [...state]
        const index = state.findIndex(i => i.Id === action.project.Id)

        if (index > -1) {
            stateCopy[index] = action.project
        }
        else {
            stateCopy = [...stateCopy, action.project]
        }

        return stateCopy
    }
    else if (action.type === actionType.ADD_QUOTE_SUCCESS) {
        const stateCopy = [...state]
        const indexProj = state.findIndex(i => i.Id === action.quote.ProjectId)
        stateCopy[indexProj].Quotes = [...stateCopy[indexProj].Quotes, action.quote]
        return stateCopy
    }
    else if (action.type === actionType.REMOVE_QUOTE_SUCCESS) {
        const stateCopy = [...state]
        const indexProj = state.findIndex(i => i.Id === action.response.quote.ProjectId)
        stateCopy[indexProj].Quotes = stateCopy[indexProj].Quotes.filter(q => q.Id !== action.response.quote.Id)
        return stateCopy
    }

    return state
}