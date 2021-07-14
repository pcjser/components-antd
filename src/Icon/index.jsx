import React from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';

const iconMap = {
  HomeOutlined: () => <HomeOutlined />,
};

export default ({ type, component, ...rest }) => (
  <Icon component={component ? component : iconMap[type]} {...rest} />
);
