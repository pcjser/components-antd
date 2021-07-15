import React from 'react';
import { AutoComplete } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <AutoComplete ref={ref} {...rest}>
    {children}
  </AutoComplete>
));

Index.Option = AutoComplete.Option;

export default Index;
