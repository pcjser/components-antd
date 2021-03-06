import React from 'react';
import { Checkbox } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Checkbox ref={ref} {...rest}>
    {children}
  </Checkbox>
));

Index.Group = Checkbox.Group;

export default Index;
