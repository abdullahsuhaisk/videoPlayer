import React from 'react';
import PropTypes from 'prop-types';

import ModalDialog from '../../components/ModalDialog/ModalDialog';
import { NavigationDialogWrapper } from './NavigationDialog.style';
import NavigationTabs from './NavigationTabs';

const NavigationDialog = (props) => {
  const { onClose, pages } = props;
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      borderRadius: '8px'
    },
    CloseButton: { color: '#0b2443' }
  };
  return (
    <>
      <NavigationDialogWrapper>
        <ModalDialog onClose={onClose} styles={wrapperStyle}>
          <div className="vb--navigationModalContainer">
            <NavigationTabs pages={pages} />
          </div>
        </ModalDialog>
      </NavigationDialogWrapper>
    </>
  );
};

NavigationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
};

export default NavigationDialog;
