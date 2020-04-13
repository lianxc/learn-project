export const ADD = 'ADD_ASYNC';
export const SUB = 'SUB_ASYNC';

const addCountAction = (text) => {  
    return {
        type: ADD,
        text
    } 
}

const fetchData = (text) => (dispatch) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    }).then(() => {
        dispatch(addCountAction(text))
    })
}

const subCountAction = (text) => {
    return {
        type: SUB,
        text
    }  
}

export {
    addCountAction,
    subCountAction,
    fetchData
}