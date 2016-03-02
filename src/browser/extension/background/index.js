import configureStore from 'app/store/configureStore';
import createMenu from './contextMenus';
import initBadge from './badge';

configureStore(store => {
  window.store = store;


  // Support background function for creating safe store
  // whenever the tabs is close the listener on that tab would be removed.
  let unsubscribesList = {};
  window.makeStore = (tabId) => {
    const storeSubscribe = store.subscribe;
    return { ...store,
      subscribe(...args) {
        const unsubscribe = storeSubscribe(...args);
        unsubscribesList[tabId] = unsubscribe;
        return unsubscribe;
      }
    };
  };

  if (!chrome.tabs.onRemoved.hasListeners()) {
    chrome.tabs.onRemoved.addListener((tabId) => {
      if (unsubscribesList[tabId]) {
        unsubscribesList[tabId]();
        delete unsubscribesList[tabId];
      }
    });
  }

  if (!chrome.tabs.onUpdated.hasListeners()) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
      if (unsubscribesList[tabId] && changeInfo.status === 'loading') {
        unsubscribesList[tabId]();
        delete unsubscribesList[tabId];
      }
    });
  }

  createMenu();
  initBadge(store.getState().counter.count);

  if (process.env.NODE_ENV !== 'production') {
    require('./inject');
  }

}, true);
