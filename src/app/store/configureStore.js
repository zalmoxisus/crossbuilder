import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getStoredState, persistStore } from 'redux-persist';
import storage from 'chrome-storage-local';
import reducers from '../reducers';
import actions from '../actions';

const persistConfig = {
  storage: storage,
  skipRestore: true,
  serialize: data => data,
  deserialize: data => data,
  debounce: 0
};

export default function configureStore(callback, isFromBackground) {
  getStoredState(persistConfig, (err, initialState) => {
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

    persistStore(store, persistConfig, () => { callback(store); });
  });
}
