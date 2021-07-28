import React from 'react';
import { Skeleton } from 'antd';

const Index = ({ children, ...rest }) => (
  <Skeleton {...rest}>{children}</Skeleton>
);

Index.Avatar = Skeleton.Avatar;

Index.Button = Skeleton.Button;

Index.Input = Skeleton.Input;

Index.Image = Skeleton.Image;

export default Index;
