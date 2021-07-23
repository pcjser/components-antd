import React from 'react';
import { Avatar } from 'antd';

const Index = ({ children, ...rest }) => <Avatar {...rest}>{children}</Avatar>;

Index.Group = ({ children, ...rest }) => <Avatar.Group {...rest}>{children}</Avatar.Group>;

export default Index;