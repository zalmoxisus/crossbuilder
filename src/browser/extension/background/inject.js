// dev only: async fetch bundle

const arrowURLs = ['^https://github\\.com'];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status !== 'loading' || !tab.url.match(arrowURLs.join('|'))) return;

  chrome.tabs.executeScript(tabId, {
    code: 'var injected = window.browserReduxInjected; window.browserReduxInjected = true; injected;', // eslint-disable-line max-len
    runAt: 'document_start'
  }, (result) => {
    if (chrome.runtime.lastError || result[0]) return;
    fetch('http://localhost:3000/js/inject.bundle.js').then(response => {
      return response.text();
    }).then(response => {

      // Include Redux DevTools extension
      const httpRequest = new XMLHttpRequest();
      httpRequest.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/inject.bundle.js');
      httpRequest.send();
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
          chrome.tabs.executeScript(tabId,
            { code: httpRequest.responseText, runAt: 'document_start' }
          );
        }
      };

      chrome.tabs.executeScript(tabId, { code: response, runAt: 'document_end' });
    });
  });
});
