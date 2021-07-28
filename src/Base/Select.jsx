import React from 'react';
import { Select } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Select ref={ref} {...rest}>
    {children}
  </Select>
));

Index.Option = Select.Option;

Index.OptGroup = Select.OptGroup;

export default Index;
