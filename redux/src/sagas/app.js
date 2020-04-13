// import { take, call, put, select, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { put, take, takeEvery, fork } from '../myReduxSaga/effect';
import {formatAction} from './utils';

const namespace = 'app';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
function* addAsync(action) {
  // yield fork(delay, 1000)
  // yield take('comp/ADD_ITEM');
  console.log(action)
  yield put(formatAction(action, namespace))
}

function* subAsync(action) {
  yield delay(1000)
  yield put(formatAction(action, namespace))
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* rootSaga() {
  yield takeEvery(`${namespace}/ADD_ASYNC`, addAsync)
  // yield takeEvery(`${namespace}/SUB_ASYNC`, subAsync)
}

// export default {
//   addAsync,
//   subAsync
// }