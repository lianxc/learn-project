import React from 'react';
import logo from '../../logo.svg';
import { connect } from '../../myReactRedux/connect';
import { addCountAction, subCountAction, fetchData } from '../../action/app';
import './index.css';

const namespace = 'app';

function App(props) {
  const {app, dispatch} = props;
  const {count} = app;
  const addCount = () => {
    // dispatch(fetchData(2))
    dispatch({
      type: `${namespace}/ADD_ASYNC`,
      text: 2
    })
  }
  const subCount = () => {
    // dispatch(subCountAction(1))
    dispatch({
      type: `${namespace}/SUB_ASYNC`,
      text: 1
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={addCount}>add</button>
      <button onClick={subCount}>sub</button>
      <div>count: <span>{count}</span></div>
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch){
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);