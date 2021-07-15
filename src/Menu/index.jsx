import React from 'react';
import { Menu } from 'antd';

const Index = ({ children, ...rest }) => <Menu {...rest}>{children}</Menu>;

Index.Item = ({ children, ...rest }) => (
  <Menu.Item {...rest}>{children}</Menu.Item>
);

Index.SubMenu = ({ children, ...rest }) => (
  <Menu.SubMenu {...rest}>{children}</Menu.SubMenu>
);

Index.ItemGroup = ({ children, ...rest }) => (
  <Menu.ItemGroup {...rest}>{children}</Menu.ItemGroup>
);

Index.Divider = (props) => <Menu.Divider {...props} />;

export default Index;
