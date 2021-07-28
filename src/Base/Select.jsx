import React from 'react';
import { Select, List } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => {
  return <Select ref={ref} {...rest}>{children}</Select>
});
// 区别于其它组件
Index.Option = Select.Option
// 区别于其它组件
Index.OptGroup = Select.OptGroup

export default Index;