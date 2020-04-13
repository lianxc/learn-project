import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import createSagaMiddleware from 'redux-saga';
import createSagaMiddleware from './myReduxSaga';
import {createStore} from './myRedux';
import {applyMiddleware} from './myRedux';
import Provider from './myReactRedux';
import reducer from './reducer';
import rootSaga from './sagas/app';
import {logger} from './middleware/logger';
import {thunk} from './middleware/thunk';
import App from './components/App';
import Comp from './components/Comp';
import './index.css';

// 调用createStore之前，applyMiddleware([logger])作为参数已经先被执行了，等同于
// applyMiddlewareWithLogger = applyMiddleware([logger]); 
// createStore(reducer, applyMiddlewareWithLogger)
const sagaMiddleware = createSagaMiddleware();
window.store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={window.store}>
    <React.StrictMode>
      <App />
      <Comp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
