'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = configureSync;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

function configureSync() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return _extends({}, config, {
    storage: _storage2['default'],
    serialize: function serialize(data) {
      return data;
    },
    deserialize: function deserialize(data) {
      return data;
    },
    debounce: 0
  });
}

module.exports = exports['default'];