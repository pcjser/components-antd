import React, { forwardRef } from 'react';
import { TreeSelect } from 'antd';

const Index = forwardRef(({ children, ...rest }, ref) => <TreeSelect ref={ref} {...rest}>{children}</TreeSelect>);

Index.TreeNode = ({ children, ...rest }) => <TreeSelect.TreeNode {...rest}>{children}</TreeSelect.TreeNode>;

export default Index;