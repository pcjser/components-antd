import React from 'react';
import { TimePicker } from 'antd';

const Index = React.forwardRef((props, ref) => <TimePicker ref={ref} {...props} />);

Index.RangePicker = props => <TimePicker.RangePicker {...props} />

export default Index;