import { combineReducers } from 'redux'

function data(state = [], action) {
    switch (action.type) {
        case "GET_LIST":
            return action.data
        default:
            return state
    }
}
const reducer = combineReducers({
    data
})

export default reducer