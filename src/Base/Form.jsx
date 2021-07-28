import React from 'react';
import { Form } from 'antd';

const Index = ({ children, ...rest }) => <Form {...rest}>{children}</Form>;

Index.List = Form.List;

Index.Item = Form.Item;

Index.ErrorList = Form.ErrorList;

Index.Provider = Form.Provider;

Index.useForm = Form.useForm;

export default Index;
