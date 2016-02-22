import { combineReducers } from 'redux';
import offers from './offers';
import matchingTabs from './matchingTabs'
import counter from './counter';
import extension from './extension';

export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ counter, offers, matchingTabs, extension }) :
    combineReducers({ counter, offers, matchingTabs, })
);
