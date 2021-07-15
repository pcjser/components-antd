import React from 'react';
import { Space } from 'antd';

const Index = ({ children, ...rest }) => <Space {...rest}>{children}</Space>;

export default Index;
