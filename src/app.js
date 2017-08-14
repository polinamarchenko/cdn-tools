'use strict';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers/index';
import { postTool, deleteTool, updateTool } from './actions/toolsActions';
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(() => console.log('Current state is: ', store.getState()));
import App from './components/App';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
