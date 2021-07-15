import React from 'react';
import { Affix } from 'antd';

const Index = ({ children, ...rest }) => <Affix {...rest}>{children}</Affix>;

export default Index;
