import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = isFromBackground => {
  const reducers = {
    counter
  };
  const extension = isFromBackground ? require('./bg/receive') : require('./bg/send');
  return combineReducers({ ...reducers, extension });
};

export default rootReducer;
