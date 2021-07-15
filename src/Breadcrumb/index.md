---
title: Breadcrumb 面包屑
order: 9
nav:
  title: Breadcrumb 面包屑
  path: /components
---

## Breadcrumb 面包屑

Demo:

```jsx
import React from 'react';
import { Breadcrumb, Icon } from 'components-antd';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="HomeOutlined" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="UserOutlined" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>
);
```

Demo:

```jsx
import React from 'react';
import { Breadcrumb } from 'components-antd';

export default () => (
  <Breadcrumb separator="">
    <Breadcrumb.Item>Location</Breadcrumb.Item>
    <Breadcrumb.Separator>:</Breadcrumb.Separator>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
```
