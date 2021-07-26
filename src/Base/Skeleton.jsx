import React from 'react';
import { Skeleton } from 'antd';

const Index = ({ children, ...rest }) => <Skeleton {...rest}>{children}</Skeleton>;

Index.Avatar = props => <Skeleton.Avatar {...props} />;

Index.Button = props => <Skeleton.Button {...props} />;

Index.Input = props => <Skeleton.Input {...props} />;

Index.Image = props => <Skeleton.Image {...props} />;

export default Index;