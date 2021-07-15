import React from 'react';
import { Input } from 'antd';

const Index = React.forwardRef((props, ref) => <Input ref={ref} {...props} />);

Index.TextArea = React.forwardRef((props, ref) => (
  <Input.TextArea ref={ref} {...props} />
));

Index.Search = React.forwardRef((props, ref) => (
  <Input.Search ref={ref} {...props} />
));

Index.Password = React.forwardRef((props, ref) => (
  <Input.Password ref={ref} {...props} />
));

Index.Group = ({ children, ...rest }) => (
  <Input.Group {...rest}>{children}</Input.Group>
);

export default Index;
