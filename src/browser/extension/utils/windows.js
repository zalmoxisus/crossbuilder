let windows = {};

function focusIfExist(type, callback) {
  if (!windows[type]) callback();
  else {
    chrome.windows.update(windows[type], {focused: true}, () => {
      if (chrome.runtime.lastError) callback();
    });
  }
}

export function popWindow(type, customOptions) {
  focusIfExist(type, () => {
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
  });
}
