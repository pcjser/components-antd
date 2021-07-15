import React from 'react';
import { Layout } from 'antd';

const Index = ({ children, ...rest }) => <Layout {...rest}>{children}</Layout>;

Index.Header = ({ children, ...rest }) => (
  <Layout.Header {...rest}>{children}</Layout.Header>
);

Index.Content = ({ children, ...rest }) => (
  <Layout.Content {...rest}>{children}</Layout.Content>
);

Index.Footer = ({ children, ...rest }) => (
  <Layout.Footer {...rest}>{children}</Layout.Footer>
);

Index.Sider = ({ children, ...rest }) => (
  <Layout.Sider {...rest}>{children}</Layout.Sider>
);

export default Index;
