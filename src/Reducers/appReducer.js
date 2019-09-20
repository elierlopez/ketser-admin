import * as actionType from '../Actions/types'
const initialState = {
    isInitialized: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.SET_APP_STATUS:
            return { ...state, isInitialized: action.isInitialized }
        default:
            return state
    }
}