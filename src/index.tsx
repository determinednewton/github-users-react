import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';

import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Routes } from './routes';

const history = createHistory();
const initialState = {};

const store = createStore(
  combineReducers({
    // ...reducers
    router: routerReducer
  }),
  initialState,
  applyMiddleware(thunk, routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
