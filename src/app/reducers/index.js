import { combineReducers } from 'redux';
import extension from './commands';
import counter from './counter';

const rootReducer = combineReducers({
  extension,
  counter
});

export default rootReducer;
