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
import { DatePicker } from 'antd';
var Index = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  return /*#__PURE__*/ React.createElement(
    DatePicker,
    _extends(
      {
        ref: ref,
      },
      props,
    ),
  );
});
Index.RangePicker = DatePicker.RangePicker;
export default Index;
