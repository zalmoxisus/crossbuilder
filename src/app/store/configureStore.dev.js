import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const logger = createLogger({level: 'info', collapsed: true});
const middleware = [
  thunk,
  require('redux-immutable-state-invariant')(),
  logger
];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  autoRehydrate(),
  DevTools.instrument()
)(createStore);

export default finalCreateStore;
