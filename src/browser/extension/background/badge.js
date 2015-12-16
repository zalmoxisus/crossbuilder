function setBadge(value) {
  chrome.browserAction.setBadgeText({ text: '' + value });
}

function initBadge(initValue) {
  setBadge(initValue);
  window.bgBadge = setBadge;
}

export default initBadge;
