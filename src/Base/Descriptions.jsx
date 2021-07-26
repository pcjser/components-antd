import React from 'react';
import { Descriptions } from 'antd';

const Index = ({ children, ...rest }) => <Descriptions {...rest}>{children}</Descriptions>;

Index.Item = ({ children, ...rest }) => <Descriptions.Item {...rest}>{children}</Descriptions.Item>;

export default Index;