let windows = {app: 0, devtools: 0};

const MENU_APP = 'MENU_APP';

function addToMenu(id, title, contexts, onClick) {
  chrome.contextMenus.create({
    id: id,
    title: title,
    contexts: contexts,
    onclick: onClick
  });
}

function closeIfExist(type) {
  if (windows[type] > 0) {
    chrome.windows.remove(windows[type]);
    windows[type] = chrome.windows.WINDOW_ID_NONE;
  }
}

function popWindow(action, url, type, customOptions) {
  closeIfExist(type);
  let options = {
    type: 'popup',
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

function createMenu() {
  addToMenu(MENU_APP, 'Redux Counter App', ['all'], () => popWindow('open', 'window.html', 'app', {left: 0, width: 1080}));
}

export default createMenu;
