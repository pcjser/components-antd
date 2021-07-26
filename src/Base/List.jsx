import React from 'react';
import { List } from 'antd';

const Index = ({ children, ...rest }) => <List {...rest}>{children}</List>;

Index.Item = ({ children, ...rest }) => <List.Item {...rest}>{children}</List.Item>;

Index.Item.Meta = props => <List.Item.Meta {...props} />;

export default Index;