import React from 'react';
import { Select } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Select ref={ref} {...rest}>
    {children}
  </Select>
));

Index.Option = ({ children, ...rest }) => (
  <Select.Option {...rest}>{children}</Select.Option>
);

Index.OptGroup = ({ children, ...rest }) => (
  <Select.OptGroup  {...rest}>{children}</Select.OptGroup>
);

export default Index;