import React from 'react';
import { Slider } from 'antd';

const Index = React.forwardRef((props, ref) => (
  <Slider ref={ref} {...props} />
));

export default Index;