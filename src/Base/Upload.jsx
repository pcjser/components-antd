import React, { forwardRef } from 'react';
import { Upload } from 'antd';

const Index = ({ children, ...rest }) => <Upload {...rest}>{children}</Upload>;

Index.Dragger = ({ children, ...rest }) => <Upload.Dragger {...rest}>{children}</Upload.Dragger>;

export default Index;