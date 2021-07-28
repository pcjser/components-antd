import React from 'react';
import { DatePicker } from 'antd';

const Index = React.forwardRef((props, ref) => (
  <DatePicker ref={ref} {...props} />
));

Index.RangePicker = DatePicker.RangePicker;

export default Index;
