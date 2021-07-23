import React from 'react';
import { Carousel } from 'antd';

const Index = React.forwardRef(({ children, ...rest }, ref) => <Carousel ref={ref} {...rest}>{children}</Carousel>);

export default Index;