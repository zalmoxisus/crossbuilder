let windows = {};

function focusIfExist(name, callback) {
  if (!windows[name]) callback();
  else {
    chrome.windows.update(windows[name], { focused: true }, () => {
      if (chrome.runtime.lastError) callback();
    });
  }
}

function handleClose(id) {
  const name = Object.keys(windows).filter(key => windows[key] === id);
  if (name) {
    delete windows[name];
    if (!Object.keys(windows).length) chrome.windows.onRemoved.removeListener(handleClose);
  }
}

export function popWindow(name, customOptions) {
  focusIfExist(name, () => {
    const options = {
      type: 'popup',
      left: 0, top: 0,
      width: window.screen.availWidth, height: window.screen.availHeight,
      url: chrome.extension.getURL(name + '.html'),
      ...customOptions
    };
    chrome.windows.create(options, (win) => {
      windows[name] = win.id;
      if (!chrome.windows.onRemoved.hasListeners()) {
        chrome.windows.onRemoved.addListener(handleClose);
      }
    });
  });
}
