import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'
import crosstabSync from 'redux-persist-crosstab'
import reducers from '../reducers';
import rehydrateAction from '../actions/rehydrateAction';

const middleware = __DEVELOPMENT__ ?
  [require('redux-logger')({ level: 'info', collapsed: true }), require('redux-immutable-state-invariant')(), thunk] :
  [thunk];
const finalCreateStore = compose(applyMiddleware(...middleware),autoRehydrate())(createStore);

export default function configureStore(initialState, isFromBackground) {
  console.warn('isFromBackground',isFromBackground);
  var store = finalCreateStore(reducers);
  const persistor = persistStore(store, isFromBackground ? { rehydrateAction: rehydrateAction(store) } : {});
  crosstabSync(persistor);
  return store;
}
