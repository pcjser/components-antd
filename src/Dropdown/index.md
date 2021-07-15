---
title: Dropdown 下拉菜单
order: 10
nav:
  title: Dropdown 下拉菜单
  path: /components
---

## Dropdown 下拉菜单

Demo:

```jsx
import React from 'react';
import { Menu, Dropdown, Icon } from 'components-antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<Icon type="DownOutlined" />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default () => (
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      Hover me <Icon type="DownOutlined" />
    </a>
  </Dropdown>
);
```
