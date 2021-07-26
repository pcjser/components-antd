import React from 'react';
import { Form } from 'antd';

const Index = ({ children, ...rest }) => <Form {...rest}>{children}</Form>;

Index.Item = ({ children, ...rest }) => (
  <Form.Item {...rest}>{children}</Form.Item>
);

Index.List = ({ children, ...rest }) => (
  <Form.List {...rest}>{children}</Form.List>
);

Index.ErrorList = (props) => <Form.ErrorList {...props} />;

Index.Provider = ({ children, ...rest }) => (
  <Form.Provider {...rest}>{children}</Form.Provider>
);

Index.useForm = Form.useForm;

export default Index;
