import React from 'react';
import { Anchor } from 'antd';

const Index = ({ children, ...rest }) => <Anchor {...rest}>{children}</Anchor>;

Index.Link = Anchor.Link;

export default Index;
