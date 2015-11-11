import { getStoredState, persistStore } from 'redux-persist';
import storage from 'chrome-storage-local';

function _getStoredState(configure, callback) {
  const persistConfig = {
    storage: storage,
    skipRestore: true,
    serialize: data => data,
    deserialize: data => data,
    debounce: 0
  };
  getStoredState(persistConfig, (err, initialState) => {
    const store = configure(initialState);
    persistStore(store, persistConfig, () => { callback(store); });
  });
}

export default _getStoredState;
