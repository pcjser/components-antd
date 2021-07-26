import React from 'react';
import { Drawer } from 'antd';

const Index = ({ children, ...rest }) => <Drawer {...rest}>{children}</Drawer>;

export default Index;