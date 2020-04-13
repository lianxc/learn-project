/**
 * logger是高阶函数，接受中间件数组，返回另一个匿名函数
 * @author lianxc
 * @param {array} {middlewares} 中间件数组，数组每一项都是一个中间件函数
 * @return {function} {匿名函数} 该匿名函数也是高阶函数，接受createStore函数，执行后又会返回第二个匿名函数
 *                              第二个匿名函数也是高阶函数，接受reducer函数，执行后返回一个对象，包括增强后的dispatch
 */
// export default function logger(store) {    
//     return (next) => {        
//         return (action) => {
//             console.log('next state', store.getState())    
//             let result = next(action)    
//             return result
//         }    
//     }
// }

// export default store => next => action => {    
//     console.log('log1')    
//     let result = next(action)    
//     return result
// }

/**
 * logger是高阶函数，接受一个对象，返回一个匿名函数
 * @author lianxc
 * @param {object} {{getState, dispatch}} 该对象包括getter、setter，拥有访问外边store闭包的能力
 * @return {function} {匿名函数} 该匿名函数也是高阶函数，接受next函数，执行后又会返回第二个匿名函数
 *                              第二个匿名函数是普通函数，接受action对象，调用next函数
 */
export function logger({ getState }) {
    return (next) => (action) => {
      // 调用 middleware 链中下一个 middleware 的 dispatch。
      let returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // 一般会是 action 本身，除非
      // 后面的 middleware 修改了它。
      return returnValue
    }
  }