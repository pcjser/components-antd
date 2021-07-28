import React from 'react';
import { Timeline } from 'antd';

const Index = ({ children, ...rest }) => (
  <Timeline {...rest}>{children}</Timeline>
);

Index.Item = Timeline.Item;

export default Index;
