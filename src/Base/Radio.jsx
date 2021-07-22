import React from 'react';
import { Radio } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Radio ref={ref} {...rest}>
    {children}
  </Radio>
));

Index.Button = ({ children, ...rest }) => (
  <Radio.Button {...rest}>{children}</Radio.Button>
);

Index.Group = ({ children, ...rest }) => (
  <Radio.Group {...rest}>{children}</Radio.Group>
);

export default Index;
