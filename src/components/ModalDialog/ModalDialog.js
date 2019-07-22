/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, CloseButton } from './ModalDialog.style';

const ModalDialog = (props) => {
  const { children, onClose, styles } = props;

  return (
    <Wrapper styles={styles}>
      {children}
      <CloseButton
        styles={styles}
        onClick={() => onClose()}
        role="button"
        tabIndex="-1">
        &times;
      </CloseButton>
    </Wrapper>
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  styles: PropTypes.object
};

ModalDialog.defaultProps = {
  onClose: () => {},
  styles: {}
};

export default ModalDialog;
