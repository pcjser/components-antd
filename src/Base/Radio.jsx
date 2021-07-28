import React from 'react';
import { Radio } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Radio ref={ref} {...rest}>
    {children}
  </Radio>
));

Index.Button = Radio.Button;

Index.Group = Radio.Group;

export default Index;
