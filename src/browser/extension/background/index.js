import configureStore from 'app/store/configureStore';
import createMenu from './contextMenus';
import initBadge from './badge';

import vAPI from './../../../vapi/chromeBackground'
import listener from './../../../app/listeners';
import injector from './../../../app/injector';

configureStore(store => {
  window.store = store;
  createMenu();
  initBadge(store.getState().counter.count);
  listener.init(vAPI, store);
  injector.init(vAPI, store);

  if (process.env.NODE_ENV !== 'production') {
    require('./inject');
  }

}, true);