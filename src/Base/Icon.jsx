import React from 'react';
import Icon, * as map from '@ant-design/icons';

const Index = ({ type, component, ...rest }) => <Icon component={component ? component : map[type]} {...rest} />;

export default Index;
