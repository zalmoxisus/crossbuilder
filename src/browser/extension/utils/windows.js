let windows = {};

function closeIfExist(type) {
  if (windows[type] > 0) {
    chrome.windows.remove(windows[type]);
    windows[type] = chrome.windows.WINDOW_ID_NONE;
  }
}

export function popWindow(action, url, type, customOptions) {
  closeIfExist(type);
  let options = {
    type: 'panel',
    left: 100, top: 100,
    width: 800, height: 700,
    ...customOptions
  };
  if (action === 'open') {
    options.url = chrome.extension.getURL(url);
    chrome.windows.create(options, (win) => {
      windows[type] = win.id;
    });
  }
}
