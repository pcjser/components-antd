import React from 'react';
import { Table } from 'antd';

const Index = props => <Table {...props} />;

Index.Column = Table.Column;

Index.ColumnGroup = Table.ColumnGroup;

export default Index;