import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import sync from 'browser-redux-sync';
import storage from './storage';
import reducers from '../reducers';
import actions from '../actions';
import bgConfig from 'browser-redux-bg/lib/configure';
import combineReducers from 'browser-redux-bg/lib/reducers';

let finalCreateStore;
if (__DEVELOPMENT__) {
  const middleware = [
    require('redux-logger')({level: 'info', collapsed: true}),
    require('redux-immutable-state-invariant')(),
    thunk
  ];
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    autoRehydrate(),
    require('redux-devtools').devTools()
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )(createStore);
}

export default function configureStore(initialState, isFromBackground, callback) {
  let store = finalCreateStore(combineReducers(reducers, isFromBackground));
  const persistor = persistStore(store, {
    ...bgConfig(store, actions, isFromBackground),
    storage: storage,
    serialize: data => data,
    deserialize: data => data
  }, callback);
  sync(persistor);
  return store;
}
