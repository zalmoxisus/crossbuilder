import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';
import createBadge from './badge';

configureStore(store => {
  createMenu(store);
  createBadge(store);

  if (__DEVELOPMENT__) {
    require('./inject');
    window.store = store;
  }

}, true);