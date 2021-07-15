import React from 'react';
import { Breadcrumb } from 'antd';

const Index = ({ children, ...rest }) => (
  <Breadcrumb {...rest}>{children}</Breadcrumb>
);

Index.Item = ({ children, ...rest }) => (
  <Breadcrumb.Item {...rest}>{children}</Breadcrumb.Item>
);

Index.Separator = ({ children, ...rest }) => (
  <Breadcrumb.Separator {...rest}>{children}</Breadcrumb.Separator>
);

export default Index;
