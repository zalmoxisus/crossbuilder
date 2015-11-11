import { combineReducers } from 'redux';
import counter from './counter';
import extension from './extension';

export default combineReducers({ counter, extension });
