import React from 'react';
import { Button } from 'antd';

const Index = ({ children, ...rest }) => <Button {...rest}>{children}</Button>;

export default Index;
