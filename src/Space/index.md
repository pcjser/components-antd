---
title: Space 间距
order: 7
nav:
  title: Space 间距
  path: /components
---

## Space 间距

Demo:

```jsx
import React from 'react';
import { Space, Typography, Divider } from 'components-antd';

export default () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
);
```
