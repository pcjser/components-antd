import React from 'react';
import { Upload } from 'antd';

const Index = ({ children, ...rest }) => <Upload {...rest}>{children}</Upload>;

Index.Dragger = Upload.Dragger;

export default Index;
