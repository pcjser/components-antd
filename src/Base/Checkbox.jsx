import React from 'react';
import { Checkbox } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Checkbox ref={ref} {...rest}>
    {children}
  </Checkbox>
));

Index.Group = ({ children, ...rest }) => (
  <Checkbox.Group {...rest}>{children}</Checkbox.Group>
);

export default Index;
