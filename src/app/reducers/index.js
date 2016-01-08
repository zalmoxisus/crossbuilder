import { combineReducers } from 'redux';
import counter from './counter';
import extension from './extension';

export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ counter, extension }) :
    combineReducers({ counter })
);
