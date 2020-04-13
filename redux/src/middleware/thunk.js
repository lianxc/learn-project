
/**
 * logger是高阶函数，接受一个对象，返回一个匿名函数
 * @author lianxc
 * @param {object} {{getState, dispatch}} 该对象包括getter、setter，拥有访问外边store闭包的能力
 * @return {function} {匿名函数} 该匿名函数也是高阶函数，接受next函数，执行后又会返回第二个匿名函数
 *                              第二个匿名函数是普通函数，接受action对象，调用next函数
 */
export function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      action(dispatch, getState())
    }
    next(action)
  }
}