import { popWindow } from 'extension/utils/windows';

function addToMenu(title, contexts, onClick, moreOptions) {
  chrome.contextMenus.create({
    title: title,
    contexts: contexts,
    onclick: onClick,
    ...moreOptions
  });
}

export default function createMenu() {
  addToMenu('Redux Counter App', ['all'], () => popWindow('open', 'window.html', 'app', {left: 0, width: 1080}));
}
