import * as types from '../constant/actionstypes'

var defaultState = {
    state: {men: true, women: true, children: false},
    sort: null
}
export var store_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_STORE:
            return {
                ...state,
                state: action.payload
            }
        case types.SORT_ELEMENTS :
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state;
    }
}