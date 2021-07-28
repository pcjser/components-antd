import React from 'react';
import { Menu } from 'antd';

const Index = ({ children, ...rest }) => <Menu {...rest}>{children}</Menu>;

Index.Item = Menu.Item;

Index.SubMenu = Menu.SubMenu;

Index.ItemGroup = Menu.ItemGroup;

Index.Divider = Menu.Divider;

export default Index;
