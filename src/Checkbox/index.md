---
title: Checkbox 多选框
order: 17
nav:
  title: Checkbox 多选框
  path: /components
---

## Checkbox 多选框

Demo:

```jsx
import React from 'react';
import { Checkbox, Row, Col } from 'components-antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

export default () => (
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
);
```
