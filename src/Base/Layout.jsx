import React from 'react';
import { Layout } from 'antd';

const Index = ({ children, ...rest }) => <Layout {...rest}>{children}</Layout>;

Index.Header = Layout.Header;

Index.Content = Layout.Content;

Index.Footer = Layout.Footer;

Index.Sider = Layout.Sider;

export default Index;
