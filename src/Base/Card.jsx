import React from 'react';
import { Card } from 'antd';

const Index = ({ children, ...rest }) => <Card {...rest}>{children}</Card>;

Index.Grid = ({ children, ...rest }) => <Card.Grid {...rest}>{children}</Card.Grid>;

Index.Meta = props => <Card.Meta {...props} />;

export default Index;