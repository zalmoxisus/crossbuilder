'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var configureSync = undefined,
    sync = undefined,
    storage = undefined;

if (chrome && chrome.storage) {
  exports.configureSync = configureSync = require('./configure');
  exports.sync = sync = require('./sync');
  exports.storage = storage = require('./storage');
} else {
  exports.configureSync = configureSync = function () {};
  exports.sync = sync = require('redux-persist-crosstab');
  exports.storage = storage = localStorage;
}

exports.configureSync = configureSync;
exports.sync = sync;
exports.storage = storage;