import React from 'react';
import { Alert } from 'antd';

const Index = (props) => <Alert {...props} />;

Index.ErrorBoundary = Alert.ErrorBoundary;

export default Index;
