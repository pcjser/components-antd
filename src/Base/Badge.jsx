import React from 'react';
import { Badge } from 'antd';

const Index = ({ children, ...rest }) => <Badge {...rest}>{children}</Badge>;

Index.Ribbon = Badge.Ribbon;

export default Index;
