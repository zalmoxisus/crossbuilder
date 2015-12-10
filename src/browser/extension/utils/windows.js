let windows = {};

function closeIfExist(type) {
  if (windows[type] > 0) {
    chrome.windows.remove(windows[type]);
    windows[type] = chrome.windows.WINDOW_ID_NONE;
  }
}

export function popWindow(type, customOptions) {
  closeIfExist(type);
  const options = {
    type: 'popup',
    left: 0, top: 0,
    width: window.screen.availWidth, height: window.screen.availHeight,
    url: chrome.extension.getURL(type + '.html'),
    ...customOptions
  };
  chrome.windows.create(options, (win) => {
    windows[type] = win.id;
  });
}
