import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';

configureStore(store => {
  window.store = store;
  createMenu();

  if (__DEVELOPMENT__) {
    require('./inject');
  }

}, true);