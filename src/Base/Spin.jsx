import React from 'react';
import { Spin } from 'antd';

const Index = ({ children, ...rest }) => <Spin {...rest}>{children}</Spin>;

Index.setDefaultIndicator = Spin.setDefaultIndicator;

export default Index;
