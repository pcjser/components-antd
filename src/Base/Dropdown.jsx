import React from 'react';
import { Dropdown } from 'antd';

const Index = ({ children, ...rest }) => (
  <Dropdown {...rest}>{children}</Dropdown>
);

Index.Button = Dropdown.Button;

export default Index;
