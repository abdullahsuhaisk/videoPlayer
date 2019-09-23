import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import ModalDialog from '../../ModalDialog/ModalDialog';
import { NavigationDialogWrapper } from './NavigationDialog.style';
import NavigationTabs from './NavigationTabs';

const NavigationDialog = () => {
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      borderRadius: '8px'
    },
    CloseButton: { color: '#0b2443' }
  };
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <NavigationDialogWrapper>
            <ModalDialog
              onClose={() =>
                client.writeData({ data: { navigationDialogShowing: false } })
              }
              styles={wrapperStyle}>
              <div className="vb--navigationModalContainer">
                <NavigationTabs />
              </div>
            </ModalDialog>
          </NavigationDialogWrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default NavigationDialog;
