import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notify from 'redux-notify';
import rootReducer from '../reducers';
import notifyEvents from '../events/notifyEvents';

export default function configureStore(callback, isBg) {
  const getState = ( isBg ? require('./getStateToBg') : require('./getStateFromBg'));

  getState(initialState => {
    let finalCreateStore;
    const middleware = [
      thunk,
      notify(notifyEvents, { noReverse: true })
    ];

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

    return store;
  }, callback);
}
