import React from 'react';
import { Descriptions } from 'antd';

const Index = ({ children, ...rest }) => (
  <Descriptions {...rest}>{children}</Descriptions>
);

Index.Item = Descriptions.Item;

export default Index;
