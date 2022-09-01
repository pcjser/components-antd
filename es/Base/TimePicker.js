function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

import React from 'react';
import { TimePicker } from 'antd';
var Index = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  return /*#__PURE__*/ React.createElement(
    TimePicker,
    _extends(
      {
        ref: ref,
      },
      props,
    ),
  );
});
Index.RangePicker = TimePicker.RangePicker;
export default Index;
