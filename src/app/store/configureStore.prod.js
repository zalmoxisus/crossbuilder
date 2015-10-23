import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  autoRehydrate()
)(createStore);

export default finalCreateStore;
