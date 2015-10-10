import configureStore from '../../../app/store/configureStore';
import createMenu from './contextMenus';
import createBadge from './badge';

const store = configureStore({counter: {count: 0}}, true);
createMenu(store);
createBadge(store);

if (__DEVELOPMENT__) {
  require('./inject');
  window.store = store;
}
