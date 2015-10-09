import configureStore from '../../app/store/configureStore';
const store = configureStore({counter: {count: 0}}, true);

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'state': 'maximized'
    // More parameters: https://developer.chrome.com/apps/app_window#CreateWindowOptions
  });
});
