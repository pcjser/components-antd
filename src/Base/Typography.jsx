import React from 'react';
import { Typography } from 'antd';

const Index = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

Index.Title = Typography.Title;

Index.Paragraph = Typography.Paragraph;

Index.Text = Typography.Text;

Index.Link = Typography.Link;

export default Index;
