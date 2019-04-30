/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalDialog = (props) => {
  const { children, onClose } = props;

  const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: auto;
  `;

  const CloseButton = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 20px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  `;

  return (
    <Wrapper>
      {children}
      <CloseButton onClick={() => onClose()} role="button" tabIndex="-1">
        &times;
      </CloseButton>
    </Wrapper>
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func
};

ModalDialog.defaultProps = {
  onClose: () => {}
};

export default ModalDialog;
