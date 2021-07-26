import React from 'react';
import { Alert } from 'antd';

const Index = props => <Alert {...props} />;

Index.ErrorBoundary = ({ children, ...rest }) => <Alert.ErrorBoundary {...rest}>{children}</Alert.ErrorBoundary>

export default Index;