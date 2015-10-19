import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { sync, storage } from 'browser-redux-sync';
import { configureBg, combineReducers } from 'browser-redux-bg';
import reducers from '../reducers';
import actions from '../actions';

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
    ...configureBg(store, actions, isFromBackground),
    storage: storage,
    serialize: data => data,
    deserialize: data => data
  }, callback);
  sync(persistor);
  return store;
}
