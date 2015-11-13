import { onConnect } from 'crossmessaging';
import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';

configureStore(store => {
  onConnect(() => ({ name: 'init', state: { counter: store.getState().counter } }));
  window.store = store;
  createMenu();

  if (__DEVELOPMENT__) {
    require('./inject');
  }

}, true);