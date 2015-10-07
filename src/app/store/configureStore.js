import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import sync from 'browser-redux-sync';
import storage from './storage';
import reducers from '../reducers';
import rehydrateAction from '../actions/rehydrateAction';

const middleware = __DEVELOPMENT__ ?
  [require('redux-logger')({ level: 'info', collapsed: true }), require('redux-immutable-state-invariant')(), thunk] :
  [thunk];
const finalCreateStore = compose(applyMiddleware(...middleware),autoRehydrate())(createStore);

export default function configureStore(initialState, isFromBackground) {
  let store = finalCreateStore(reducers);
  const config = isFromBackground ? { rehydrateAction: rehydrateAction(store) } : {};
  const persistor = persistStore(store, { ...config, storage:storage });
  sync(persistor);
  return store;
}
