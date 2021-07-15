---
title: DatePicker 日期选择框
order: 18
nav:
  title: DatePicker 日期选择框
  path: /components
---

## DatePicker 日期选择框

Demo:

```jsx
import React from 'react';
import { DatePicker, Space } from 'components-antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
```

Demo2:

```jsx
import React from 'react';
import { DatePicker, Space } from 'components-antd';

export default () => (
  <Space direction="vertical" size={12}>
    <DatePicker.RangePicker />
    <DatePicker.RangePicker showTime />
    <DatePicker.RangePicker picker="week" />
    <DatePicker.RangePicker picker="month" />
    <DatePicker.RangePicker picker="year" />
  </Space>
);
```
