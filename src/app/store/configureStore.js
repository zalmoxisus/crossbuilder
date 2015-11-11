import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getStoredState, persistStore } from 'redux-persist';
import storage from 'chrome-storage-local';
import notify from 'redux-notify';
import rootReducer from '../reducers';
import notifyEvents from '../events/notifyEvents';

const persistConfig = {
  storage: storage,
  skipRestore: true,
  serialize: data => data,
  deserialize: data => data,
  debounce: 0
};

export default function configureStore(callback) {
  getStoredState(persistConfig, (err, initialState) => {
    let finalCreateStore;
    const middleware = [thunk, notify(notifyEvents)];

    if (process.env.NODE_ENV !== 'production') {
      middleware.push(
        require('redux-immutable-state-invariant')(),
        require('redux-logger')({level: 'info', collapsed: true})
      );
      finalCreateStore = compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )(createStore);
    } else {
      finalCreateStore = applyMiddleware(...middleware)(createStore);
    }

    const store = finalCreateStore(rootReducer, initialState);

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
