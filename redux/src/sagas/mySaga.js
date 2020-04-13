import { put, take, takeEvery } from '../myReduxSaga/effect';
// import { take, call, put, select, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import {formatAction} from './utils';

const namespace = 'app';

export function* addAsync(action) {
    // yield put({
    //   type: 'ADD_ASYNC',
    //   text: 2
    // })
    console.log(111)
    yield take('comp/ADD_ITEM');
    console.log(333)
}

function* subAsync(action) {
  console.log(222)
  yield take('comp/DEL_ITEM');
  console.log(444)
}

  // Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* rootSaga() {
    yield takeEvery(`${namespace}/ADD_ASYNC`, addAsync)
    yield takeEvery(`${namespace}/SUB_ASYNC`, subAsync)
}