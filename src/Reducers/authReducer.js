import * as actionType from '../Actions/types'
const initialState = {
    createdUser: {},
    token: {}
}
export default function (state = initialState, action) {
    if (action.type === actionType.GET_TOKEN) {
        return { ...state, token: action.token }
    }
    if (action.type === actionType.CREATE_USER) {
        return { ...state, user: action.user }
    }

    return state
}