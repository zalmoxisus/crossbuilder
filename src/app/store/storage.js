let storage = chrome.storage.local;

storage.getItem = (key, callback) => {
  chrome.storage.local.get(key, obj => {
    if (obj[key]) callback(null, obj[key]);
    else callback(chrome.runtime.lastError, null);
  });
};

storage.setItem = (key, value, callback) => {
  let obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj, () => {
    if (chrome.runtime.lastError) callback(key);
  });
};

storage.removeItem = storage.remove;

storage.getAllKeys = callback => {
  // Do not need this, use storage.clear() for purgeAll instead
};

export default storage;
