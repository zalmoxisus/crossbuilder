import { combineReducers } from 'redux';
import extension from './extension';
import counter from './counter';

const rootReducer = combineReducers({
  extension,
  counter
});

export default rootReducer;
