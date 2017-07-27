"use strict"

import {combineReducers} from 'redux';
import {toolsReducers} from './toolsReducers';

export default combineReducers({
  tools: toolsReducers
})
