import React from 'react';
import { Mentions } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => (
  <Mentions ref={ref} {...rest}>
    {children}
  </Mentions>
));

Index.Option = Mentions.Option;

export default Index;
