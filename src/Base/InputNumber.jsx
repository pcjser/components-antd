import React from 'react';
import { InputNumber } from 'antd';

const Index = React.forwardRef((props, ref) => (
  <InputNumber ref={ref} {...props} />
));

export default Index;
