import React from 'react';
import { Steps } from 'antd';

const Index = ({ children, ...rest }) => <Steps {...rest}>{children}</Steps>;

Index.Step = (props) => <Steps.Step {...props} />;

export default Index;
