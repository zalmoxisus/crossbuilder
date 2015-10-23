import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { configureSync, sync } from 'browser-redux-sync';
import { configureBg, combineReducers } from 'browser-redux-bg';
import reducers from '../reducers';
import actions from '../actions';

export default function configureStore(callback, isFromBackground, initialState) {
  chrome.storage.local.get(null, obj => {
    let rootReducer = combineReducers(reducers, isFromBackground);
    let finalCreateStore;
    let store;

    if (process.env.NODE_ENV === 'production') {
      finalCreateStore = require('./configureStore.prod');
      store = finalCreateStore(rootReducer, initialState);
    } else {
      finalCreateStore = require('./configureStore.dev');
      store = finalCreateStore(rootReducer, initialState);

      if (module.hot) {
        module.hot.accept('../reducers', () =>
          store.replaceReducer(require('../reducers'))
        );
      }
    }

    const persistor = persistStore(store, configureSync(configureBg(store, actions, isFromBackground)), () => {sync(persistor); callback(store);});
  });
}
