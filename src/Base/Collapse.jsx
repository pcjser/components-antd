import React from 'react';
import { Collapse } from 'antd';

const Index = ({ children, ...rest }) => <Collapse {...rest}>    {children}  </Collapse>;

Index.Panel = ({ children, ...rest }) => (
  <Collapse.Panel {...rest}>{children}</Collapse.Panel>
);

export default Index;