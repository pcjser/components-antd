import React from 'react';
import { Tree } from 'antd';

const Index = React.forwardRef((props, ref) => <Tree ref={ref} {...props} />);

Index.TreeNode = Tree.TreeNode;

Index.DirectoryTree = Tree.DirectoryTree;

export default Index;
