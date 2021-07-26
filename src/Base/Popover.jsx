import React from 'react';
import { Popover } from 'antd';

const Index = ({ children, ...rest }) => <Popover {...rest}>{children}</Popover>;

export default Index;