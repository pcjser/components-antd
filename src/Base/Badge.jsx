import React from 'react';
import { Badge } from 'antd';

const Index = ({ children, ...rest }) => <Badge {...rest}>{children}</Badge>;

Index.Ribbon = ({ children, ...rest }) => <Badge.Ribbon {...rest}>{children}</Badge.Ribbon>;

export default Index;