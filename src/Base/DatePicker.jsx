import React from 'react';
import { DatePicker } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const Index = React.forwardRef((props, ref) => (
  <DatePicker ref={ref} locale={locale} {...props} />
));

Index.RangePicker = React.forwardRef((props, ref) => (
  <DatePicker.RangePicker ref={ref} locale={locale} {...props} />
));

export default Index;
