import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getStoredState, persistStore } from 'redux-persist';
import storage from 'chrome-storage-local';
import rootReducer from '../reducers';

const persistConfig = {
  storage: storage,
  skipRestore: true,
  serialize: data => data,
  deserialize: data => data,
  debounce: 0
};

export default function configureStore(callback, isFromBackground) {
  getStoredState(persistConfig, (err, initialState) => {
    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
      Object.assign(middleware, [
        require('redux-logger')({level: 'info', collapsed: true}),
        require('redux-immutable-state-invariant')()
      ]);
    }

    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (process.env.NODE_ENV !== 'production') {
      if (module.hot) {
        module.hot.accept('../reducers', () =>
          store.replaceReducer(require('../reducers'))
        );
      }
    }

    persistStore(store, persistConfig, () => { callback(store); });
  });
}
