export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';

const addItemAction = (text) => {  
    return {
        type: ADD_ITEM,
        text
    }  
}

const delItemAction = (text) => {
    return {
        type: DEL_ITEM,
        text
    }  
}

export {
    addItemAction,
    delItemAction
}