import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';

import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Routes } from './routes';
import { configureStore } from './store';

const history = createBrowserHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
