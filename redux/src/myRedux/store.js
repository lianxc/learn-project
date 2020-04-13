
/**
 * createStore是高阶函数，接受合并后的总reducer函数，增强函数，返回一个对象，该对象包括了三个函数
 * @author lianxc
 * @param {function} {reducer} 总reducer函数，经过combineReducers包装返回的函数
 * @param {function} {enhandler} 增强函数，经过applyMiddleware包装返回的函数
 * @return {oject} {{getState, dispatch, subscribe}} 返回由三个闭包函数组成的对象，只有通过闭包才能访问createStore函数内部变量
 */
export function createStore(reducer, enhandler) {
    if (enhandler) {
        return enhandler(createStore)(reducer)
    }
    let state = {}; //闭包变量，全局state真正存放的地方
    let observers = []; // 观察者队列
    // getter
    function getState() {
        return state;
    }
    // setter
    function dispatch(action) {
        state = reducer(state, action);
        observers.forEach(fn => fn());
    }
    function subscribe(fn) {
        observers.push(fn);
    }
    dispatch({ type: '@@REDUX_INIT' }) // 初始化state数据
    return {getState, dispatch, subscribe}
}