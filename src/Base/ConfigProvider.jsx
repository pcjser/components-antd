import React from 'react';
import { ConfigProvider } from 'antd';

const Index = ({ children, ...rest }) => <ConfigProvider {...rest}>{children}</ConfigProvider>;

Index.config = ConfigProvider.config;

export default Index;