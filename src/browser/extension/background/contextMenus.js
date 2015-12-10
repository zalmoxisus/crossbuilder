import { popWindow } from 'extension/utils/windows';

const menus = [
  ['Redux Counter App', ['all'], () => popWindow('open', 'window.html', 'app', {left: 0, width: 1080})]
];

function addToMenu(title, contexts, onClick, moreOptions) {
  chrome.contextMenus.create({
    title: title,
    contexts: contexts,
    onclick: onClick,
    ...moreOptions
  });
}

export default function createMenu() {
  menus.forEach(menu => { addToMenu(...menu); });
}
