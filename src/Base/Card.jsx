import React from 'react';
import { Card } from 'antd';

const Index = ({ children, ...rest }) => <Card {...rest}>{children}</Card>;

Index.Grid = Card.Grid;

Index.Meta = Card.Meta;

export default Index;
