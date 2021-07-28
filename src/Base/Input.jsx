import React from 'react';
import { Input } from 'antd';

const Index = React.forwardRef((props, ref) => <Input ref={ref} {...props} />);

Index.TextArea = Input.TextArea;

Index.Search = Input.Search;

Index.Password = Input.Password;

Index.Group = Input.Group;

export default Index;
