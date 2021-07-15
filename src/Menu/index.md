---
title: Menu 导航菜单
order: 11
nav:
  title: Menu 导航菜单
  path: /components
---

## Menu 导航菜单

Demo:

```jsx
import React from 'react';
import { Menu, Dropdown, Icon } from 'components-antd';

export default () => (
  <Menu
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
    <Menu.SubMenu
      key="sub1"
      icon={<Icon type="MailOutlined" />}
      title="Navigation One"
    >
      <Menu.ItemGroup key="g1" title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="g2" title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
    <Menu.SubMenu
      key="sub2"
      icon={<Icon type="AppstoreOutlined" />}
      title="Navigation Two"
    >
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <Menu.SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.SubMenu
      key="sub4"
      icon={<Icon type="SettingOutlined" />}
      title="Navigation Three"
    >
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
```
