import React, { forwardRef } from 'react';
import { TreeSelect } from 'antd';

const Index = forwardRef(({ children, ...rest }, ref) => (
  <TreeSelect ref={ref} {...rest}>
    {children}
  </TreeSelect>
));

Index.TreeNode = TreeSelect.TreeNode;

export default Index;
