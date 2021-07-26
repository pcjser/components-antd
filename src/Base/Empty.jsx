import React from 'react';
import { Empty } from 'antd';

const Index = ({ children, ...rest }) => <Empty {...rest}>{children}</Empty>;

Index.PRESENTED_IMAGE_DEFAULT = Empty.PRESENTED_IMAGE_DEFAULT;

Index.PRESENTED_IMAGE_SIMPLE = Empty.PRESENTED_IMAGE_SIMPLE;

export default Index;