import React from 'react';
import { Breadcrumb } from 'antd';

const Index = ({ children, ...rest }) => (
  <Breadcrumb {...rest}>{children}</Breadcrumb>
);

Index.Item = Breadcrumb.Item;

Index.Separator = Breadcrumb.Separator;

export default Index;
