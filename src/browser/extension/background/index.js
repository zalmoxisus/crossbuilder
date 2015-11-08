import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';
import createBadge from './badge';

configureStore(store => {
  window.store = store;
  createMenu(store);
  createBadge(store);

  if (__DEVELOPMENT__) {
    require('./inject');
  }

}, true);