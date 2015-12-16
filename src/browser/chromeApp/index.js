import configureStore from '../../app/store/configureStore';

configureStore(store => {
  window.store = store;
  chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('window.html', {
      'state': 'maximized'
      // More parameters: https://developer.chrome.com/apps/app_window#CreateWindowOptions
    });
  });
}, true);
