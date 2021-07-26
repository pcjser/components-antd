import React from 'react';
import { Tag } from 'antd';

const Index = ({ children, ...rest }) => <Tag {...rest}>{children}</Tag>;

Index.CheckableTag = ({ children, ...rest }) => <Tag.CheckableTag {...rest}>{children}</Tag.CheckableTag>;

export default Index;