import React from 'react';
import { Statistic } from 'antd';

const Index = props => <Statistic {...props} />;

Index.Countdown = props => <Statistic.Countdown {...props} />;

export default Index;