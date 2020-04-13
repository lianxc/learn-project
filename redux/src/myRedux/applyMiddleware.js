import {compose} from './compose';

/**
 * applyMiddleware是高阶函数，接受中间件数组，返回另一个匿名函数
 * @author lianxc
 * @param {array} {middlewares} 中间件数组，数组每一项都是一个中间件函数
 * @return {function} {匿名函数} 该匿名函数也是高阶函数，接受createStore函数，执行后又会返回第二个匿名函数
 *                              第二个匿名函数也是高阶函数，接受reducer函数，执行后返回一个对象，包括增强后的dispatch
 */
export const applyMiddleware = (...middlewares) => {
    return (createStore) => {
        return (reducer) => {
            const store = createStore(reducer)    
            let { getState, dispatch } = store    
            const params = {      
                getState,      
                dispatch: (action) => dispatch(action)      
                //解释一下这里为什么不直接 dispatch: dispatch      
                //因为直接使用dispatch会产生闭包,导致所有中间件都共享同一个dispatch,如果有中间件修改了dispatch或者进行异步dispatch就可能出错    
            }    
            const middlewareArr = middlewares.map(middleware => middleware(params)) 
        
            dispatch = compose(...middlewareArr)(dispatch)    
            return { ...store, dispatch }
        }
    }
}

// export const applyMiddleware = ([...middlewares]) => createStore => reducer => {
//     console.log(middlewares)    
//     const store = createStore(reducer)    
//     let { getState, dispatch } = store    
//     const params = {      
//         getState,      
//         dispatch: (action) => dispatch(action)      
//         //解释一下这里为什么不直接 dispatch: dispatch      
//         //因为直接使用dispatch会产生闭包,导致所有中间件都共享同一个dispatch,如果有中间件修改了dispatch或者进行异步dispatch就可能出错    
//     }    

//     const middlewareArr = middlewares.map(middleware => middleware(params)) 
   
//     dispatch = compose(...middlewareArr)(dispatch)    
//     return { ...store, dispatch }
// }