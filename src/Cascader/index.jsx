import React from 'react';
import { Cascader } from 'antd';

const Index = React.forwardRef((props, ref) => (
  <Cascader ref={ref} {...props} />
));

export default Index;
