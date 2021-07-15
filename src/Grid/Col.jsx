import React from 'react';
import { Col } from 'antd';

const Index = ({ children, ...rest }) => <Col {...rest}>{children}</Col>;

export default Index;
