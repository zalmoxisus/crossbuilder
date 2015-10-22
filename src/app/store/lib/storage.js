"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var storage = chrome.storage.local;

storage._lastData = null; // Deal with Chrome issue https://code.google.com/p/chromium/issues/detail?id=361113

storage.getItem = function (key, callback) {
  chrome.storage.local.get(key, function (obj) {
    if (obj[key]) callback(null, obj[key]);else callback(chrome.runtime.lastError, null);
  });
};

storage.setItem = function (key, value, callback) {
  var obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj, function () {
    if (chrome.runtime.lastError) callback(key);
  });
  storage._lastData = value;
};

storage.removeItem = storage.remove;

storage.getAllKeys = function (callback) {
  chrome.storage.local.get(null, function (obj) {
    callback(null, Object.keys(obj));
  });
};

exports["default"] = storage;
module.exports = exports["default"];