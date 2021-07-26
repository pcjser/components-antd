import React from 'react';
import { Popconfirm } from 'antd';

const Index = ({ children, ...rest }) => <Popconfirm {...rest}>{children}</Popconfirm>;

export default Index;