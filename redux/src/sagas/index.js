import { all } from '../myReduxSaga/effect'
import appSaga from './app';
import compSaga from './comp';

export default function*() {
  yield all([
    appSaga(),
    // compSaga()
  ])
}