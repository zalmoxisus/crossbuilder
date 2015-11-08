import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getStoredState, persistStore } from 'redux-persist';
import { configureSync, sync } from 'browser-redux-sync';
import reducers from '../reducers';
import actions from '../actions';

export default function configureStore(callback, isFromBackground) {
  getStoredState(configureSync(), (err, initialState) => {
    const rootReducer = combineReducers({ ...reducers });
    let finalCreateStore;
    let store;

    if (process.env.NODE_ENV === 'production') {
      finalCreateStore = require('./configureStore.prod');
      store = finalCreateStore(rootReducer, initialState);
    } else {
      finalCreateStore = require('./configureStore.dev')(isFromBackground);
      store = finalCreateStore(rootReducer, initialState);

      if (module.hot) {
        module.hot.accept('../reducers', () =>
          store.replaceReducer(require('../reducers'))
        );
      }
    }

    const persistor = persistStore(store, configureSync(), () => {sync(persistor); callback(store);});
  });
}
