import React from 'react';
import { Dropdown } from 'antd';

const Index = ({ children, ...rest }) => (
  <Dropdown {...rest}>{children}</Dropdown>
);

Index.Button = ({ children, ...rest }) => (
  <Dropdown.Button {...rest}>{children}</Dropdown.Button>
);

export default Index;
