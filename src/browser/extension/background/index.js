import configureStore from 'app/store/configureStore';
import createMenu from './contextMenus';
import initBadge from './badge';

configureStore(store => {
  window.store = store;

  let unsubscribesList = {};
  window.makeStore = function(tabId) {
    const storeSubscribe = store.subscribe;
    return {...store,
      subscribe(...args) {
        const unsubscribe = storeSubscribe(...args);
        unsubscribesList[tabId] = unsubscribe;
        return unsubscribe;
      }
    };
  };

  chrome.tabs.onRemoved.addListener((tabId) => {
    if (unsubscribesList[tabId]) {
      unsubscribesList[tabId]();
      delete unsubscribesList[tabId];
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (unsubscribesList[tabId] && changeInfo.status === 'loading') {
      unsubscribesList[tabId]();
      delete unsubscribesList[tabId];
    }
  });

  createMenu();
  initBadge(store.getState().counter.count);

  if (process.env.NODE_ENV !== 'production') {
    require('./inject');
  }

}, true);
