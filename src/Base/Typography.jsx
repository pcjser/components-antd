import React from 'react';
import { Typography } from 'antd';

const Index = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

Index.Title = ({ children, ...rest }) => (
  <Typography.Title {...rest}>{children}</Typography.Title>
);

Index.Paragraph = ({ children, ...rest }) => (
  <Typography.Paragraph {...rest}>{children}</Typography.Paragraph>
);

Index.Text = ({ children, ...rest }) => (
  <Typography.Text {...rest}>{children}</Typography.Text>
);

Index.Link = ({ children, ...rest }) => (
  <Typography.Link {...rest}>{children}</Typography.Link>
);

export default Index;
