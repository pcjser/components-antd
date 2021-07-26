import React from 'react';
import { Tree } from 'antd';

const Index = React.forwardRef((props, ref) => <Tree ref={ref} {...props} />);

Index.DirectoryTree = props => <Tree.DirectoryTree {...props} />

// Index.TreeNode = ({ children, ...rest }) => <Tree.TreeNode {...rest}>{children}</Tree.TreeNode>

export default Index;