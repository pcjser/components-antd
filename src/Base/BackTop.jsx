import React from 'react';
import { BackTop } from 'antd';

const Index = ({ children, ...rest }) => <BackTop {...rest}>{children}</BackTop>;

export default Index;