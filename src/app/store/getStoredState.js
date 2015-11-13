import { getStoredState, persistStore } from 'redux-persist';
import storage from 'chrome-storage-local';

export default function(configure, callback) {
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
