'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Index = function Index(props) {
  return /*#__PURE__*/ _react.default.createElement(_antd.Table, props);
};

Index.Column = _antd.Table.Column;
Index.ColumnGroup = _antd.Table.ColumnGroup;
var _default = Index;
exports.default = _default;
