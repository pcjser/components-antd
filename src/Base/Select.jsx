import React from 'react';
import { Select } from 'antd';

console.log(Select);

const Index = React.forwardRef(({ children, ...rest }, ref) => {
  console.log(children);
  return (
    <Select ref={ref} {...rest}>
      {children}
      {/* {children?.map((i, index) => {
        console.log(i);
        return <Select.Option key={index}>111</Select.Option>
      })} */}
    </Select>
  )
}
);

Index.Option = ({ children, ...rest }) => (
  <Select.Option {...rest}>{children}</Select.Option>
);

Index.OptGroup = ({ children, ...rest }) => (
  <Select.OptGroup {...rest}>{children}</Select.OptGroup>
);

export default Index;