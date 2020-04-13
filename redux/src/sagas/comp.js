import { put, takeEvery } from 'redux-saga/effects';
import {formatAction} from './utils';

const namespace = 'comp';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
function* addItemAsync(action) {
  yield delay(1000)
  yield put(formatAction(action, namespace))
}

function* delItemAsync(action) {
  yield delay(1000)
  yield put(formatAction(action, namespace))
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* rootSaga() {
  yield takeEvery(`${namespace}/ADD_ITEM`, addItemAsync)
  yield takeEvery(`${namespace}/DEL_ITEM`, delItemAsync)
}
