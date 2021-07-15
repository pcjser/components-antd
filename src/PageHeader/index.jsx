import React from 'react';
import { PageHeader } from 'antd';

const Index = ({ children, ...rest }) => (
  <PageHeader {...rest}>{children}</PageHeader>
);

export default Index;
