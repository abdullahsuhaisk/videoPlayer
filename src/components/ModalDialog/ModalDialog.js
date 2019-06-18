/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, CloseButton } from './ModalDialog.style';

// const Wrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.4);
//   pointer-events: auto;
// `;

// const CloseButton = styled.span`
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 15px 20px;
//   font-size: 30px;
//   color: #fff;
//   cursor: pointer;
// `;

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
