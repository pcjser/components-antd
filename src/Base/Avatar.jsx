import React from 'react';
import { Avatar } from 'antd';

const Index = ({ children, ...rest }) => <Avatar {...rest}>{children}</Avatar>;

Index.Group = Avatar.Group;

export default Index;
