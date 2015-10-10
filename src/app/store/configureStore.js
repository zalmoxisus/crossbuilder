import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import sync from 'browser-redux-sync';
import storage from './storage';
import reducers from '../reducers';
import rehydrateAction from '../actions/rehydrateAction';

let finalCreateStore;
if (__DEVELOPMENT__) {
  const middleware = [
    require('redux-logger')({ level: 'info', collapsed: true }),
    require('redux-immutable-state-invariant')(),
    thunk
  ];
   finalCreateStore = compose(
    applyMiddleware(...middleware),
    autoRehydrate(),
    require('redux-devtools').devTools()
  )(createStore);
}
else {
   finalCreateStore = compose(
    applyMiddleware([thunk]),
    autoRehydrate()
  )(createStore);
}

export default function configureStore(initialState, isFromBackground, callback) {
  let store = finalCreateStore(reducers);
  const config = isFromBackground ? { rehydrateAction: rehydrateAction(store) } : {};
  const persistor = persistStore(store, { ...config, storage:storage }, callback);
  sync(persistor);
  return store;
}
