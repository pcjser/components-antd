import React from 'react';
import { List } from 'antd';

const Index = ({ children, ...rest }) => <List {...rest}>{children}</List>;

Index.Item = List.Item;

Index.Item.Meta = List.Item.Meta;

export default Index;
