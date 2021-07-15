import React from 'react';
import { Row } from 'antd';

const Index = ({ children, ...rest }) => <Row {...rest}>{children}</Row>;

export default Index;
