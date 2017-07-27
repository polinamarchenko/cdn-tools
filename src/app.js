"use strict"

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import React from 'react';
import {render} from 'react-dom';

import reducers from './reducers/index';
import {postTool, deleteTool, updateTool} from './actions/toolsActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(() => console.log('Current state is: ', store.getState()));

import ToolsList from './components/ToolsList';
import Menu from './components/Menu';
import ToolForm from './components/ToolForm';
import SearchBar from './components/SearchBar';

render(
  <Provider store={store}>
    <div>
      <Menu />
      <SearchBar />
      <ToolForm />
      <ToolsList />
    </div>
  </Provider>, document.getElementById('app')
);

// store.dispatch(postTool([
//   {
//     _id: 1,
//     title: "First",
//     type: "plugin",
//     description: "description",
//     link: "first url",
//     keywords: "plugin, go",
//     platform: "Go",
//     cdn: "fastly"
//   },
//   {
//     _id: 2,
//     title: "Second",
//     type: "plugin",
//     description: "description",
//     link: "first url",
//     keywords: "plugin, go",
//     platform: "Go",
//     cdn: "firebase"
//   }]
// ))

// store.dispatch(deleteTool(
//   {_id: 1}
// ));
//
// store.dispatch(updateTool(
//   {
//     _id: 2,
//     cdn: "firebase"
//     }
// ));
