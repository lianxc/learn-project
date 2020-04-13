import { ADD, SUB } from '../action/app';

const initialState = {
    count: 0
}

export const appReducer = function(state, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                count: state.count + action.text
            }
        case SUB:
            return {
                ...state,
                count: state.count - (action.text || 1)
            }
        default: 
            return state || initialState;
    }
}