let windows = {app: 0};

const MENU_APP = 'MENU_APP';

function createMenu(store) {
  addToMenu(MENU_APP, 'Redux counter app', ['all']);

  chrome.contextMenus.onClicked.addListener((event) => {
    switch (event.menuItemId) {
      case MENU_APP: popWindow('open', 'window.html', 'app'); break;
    }
  });
}

function addToMenu(id, title, contexts) {
  chrome.contextMenus.create({
    id: id,
    title: title,
    contexts: contexts
  });
}

function popWindow(action, url, type) {
  closeIfExist(type);
  let options = {
    type: 'popup',
    left: 100, top: 100,
    width: 800, height: 475
  };
  if (action === 'open') {
    options.url = url;
    chrome.windows.create(options, (win) => {
      windows[type] = win.id;
    });
  }
}

function closeIfExist(type) {
  if (windows[type] > 0) {
    chrome.windows.remove(windows[type]);
    windows[type] = chrome.windows.WINDOW_ID_NONE;
  }
}

export default createMenu;
