import * as actionType from '../Actions/types'
const initialState = {
    createdUser: {},
    token: null,
    error: null,
    loading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.GET_TOKEN_START:
            return { ...state, loading: true }
        case actionType.GET_TOKEN_SUCCESS:
            return { ...state, token: action.token, error: null, loading: false }
        case actionType.GET_TOKEN_FAIL:
            return { ...state, token: null, error: action.error.error_description, loading: false }
        case actionType.AUTH_LOGOUT:
            return { ...state, token: null, loading: false }
        case actionType.CREATE_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}