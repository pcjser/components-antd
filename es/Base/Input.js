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
import { Input } from 'antd';
var Index = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  return /*#__PURE__*/ React.createElement(
    Input,
    _extends(
      {
        ref: ref,
      },
      props,
    ),
  );
});
Index.TextArea = Input.TextArea;
Index.Search = Input.Search;
Index.Password = Input.Password;
Index.Group = Input.Group;
export default Index;
