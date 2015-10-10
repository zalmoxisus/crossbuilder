// dev only: async fetch bundle

const arrowURLs = [ 'https://github.com' ];

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status !== 'loading') return;
  const matched = arrowURLs.every(url => !!tab.url.match(url));
  if (!matched) return;

  chrome.tabs.executeScript(tabId, {
    code: 'var injected = window.browserReduxInjected; window.browserReduxInjected = true; injected;',
    runAt: 'document_start'
  }, (result) => {
    if (chrome.runtime.lastError || result[0]) return;
    fetch('http://localhost:3000/js/inject.bundle.js').then(response => {
      return response.text();
    }).then(response => {
      chrome.tabs.executeScript(tabId, { code: response, runAt: 'document_end' });
    });
  });
});
