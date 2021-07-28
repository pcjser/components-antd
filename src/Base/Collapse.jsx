import React from 'react';
import { Collapse } from 'antd';

const Index = ({ children, ...rest }) => (
  <Collapse {...rest}>{children}</Collapse>
);

Index.Panel = Collapse.Panel;

export default Index;
