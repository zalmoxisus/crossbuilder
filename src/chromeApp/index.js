chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('index.html', {
    state: 'normal'
    // More parameters: https://developer.chrome.com/apps/app_window#CreateWindowOptions
  });
});
