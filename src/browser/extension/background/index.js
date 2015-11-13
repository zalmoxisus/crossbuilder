import { onConnect } from 'crossmessaging';
import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';

configureStore(store => {
  onConnect(
    () => ({ name: 'init', state: { counter: store.getState().counter } }),
    {
      'redux-notify': (message) => store.dispatch(message.action)
    }
  );
  window.store = store;
  createMenu();

  if (__DEVELOPMENT__) {
    require('./inject');
  }

}, true);