import React from 'react';
import PropTypes from 'prop-types';

import ModalDialog from '../../components/ModalDialog/ModalDialog';

const NavigationDialog = (props) => {
  const { onClose } = props;
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      top: '50px',
      left: '100px',
      width: '80%',
      height: '80%',
      borderRadius: '8px'
    },
    CloseButton: { color: 'black' }
  };
  return (
    <>
      <ModalDialog onClose={onClose} styles={wrapperStyle}>
        <div>Abc</div>
      </ModalDialog>
    </>
  );
};

NavigationDialog.propTypes = {};

export default NavigationDialog;
