import { popWindow } from 'extension/utils/windows';
const MENU_APP = 'MENU_APP';

function addToMenu(id, title, contexts, onClick, moreOptions) {
  chrome.contextMenus.create({
    id: id,
    title: title,
    contexts: contexts,
    onclick: onClick,
    ...moreOptions
  });
}

export default function createMenu() {
  addToMenu(MENU_APP, 'Redux Counter App', ['all'], () => popWindow('open', 'window.html', MENU_APP, {left: 0, width: 1080}));
}
