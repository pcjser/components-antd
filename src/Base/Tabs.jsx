import React from 'react';
import { Tabs } from 'antd';

const Index = ({ children, ...rest }) => <Tabs {...rest}>{children}</Tabs>;

Index.TabPane = ({ children, ...rest }) => <Tabs.TabPane {...rest}>{children}</Tabs.TabPane>;

export default Index;