import { onConnect } from 'crossmessaging';
import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';
import createBadge from './badge';

configureStore(store => {
  onConnect(
    () => ({ name: 'init', state: { counter: store.getState().counter } }),
    {
      'redux-notify': (message) => store.dispatch(message.action)
    }
  );

  window.store = store;
  createMenu();
  createBadge(store);

  if (__DEVELOPMENT__) {
    require('./inject');
  }

}, true);