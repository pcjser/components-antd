import React from 'react';
import { Tooltip } from 'antd';

const Index = ({ children, ...rest }) => <Tooltip {...rest}>{children}</Tooltip>;

export default Index;