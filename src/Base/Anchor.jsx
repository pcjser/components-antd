import React from 'react';
import { Anchor } from 'antd';

const Index = ({ children, ...rest }) => <Anchor {...rest}>{children}</Anchor>;

Index.Link = ({ children, ...rest }) => <Anchor.Link {...rest}>{children}</Anchor.Link>;

export default Index;