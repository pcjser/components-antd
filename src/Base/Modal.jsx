import React from 'react';
import { Modal } from 'antd';

const Index = ({ children, ...rest }) => <Modal {...rest}>{children}</Modal>;

Index.info = Modal.info;
Index.success = Modal.success;
Index.error = Modal.error;
Index.warning = Modal.warning;
Index.confirm = Modal.confirm;
Index.destroyAll = Modal.destroyAll;
Index.useModal = Modal.useModal;

export default Index;