import { ADD_ITEM, DEL_ITEM } from '../action/comp';

const initialState = {
    list: []
}

export const compReducer = function(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: state.list.concat([action.text])
            }
        case DEL_ITEM:
            return {
                ...state,
                list: state.list.slice(0, state.list.length - 1)
            }
        default: 
            return state || initialState;
    }
}