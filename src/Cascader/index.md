---
title: Cascader 级联选择
order: 16
nav:
  title: Cascader 级联选择
  path: /components
---

## Cascader 级联选择

Demo:

```jsx
import React from 'react';
import { Cascader } from 'components-antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

export default () => (
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    style={{ width: '100%' }}
  />
);
```
