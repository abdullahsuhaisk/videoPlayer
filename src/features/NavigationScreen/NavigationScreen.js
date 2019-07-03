import React from 'react';
import ShoppingButton from '../../components/Button/ShoppingButton';
import NavigationDialog from './NavigationDialog';

const NavigationScreen = () => {
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      top: '50px',
      left: '100px',
      width: '80%',
      height: '80%',
      borderRadius: '8px'
    },
    CloseButton: { color: 'white' }
  };

  return (
    <>
      <ShoppingButton />
      <NavigationDialog styles={wrapperStyle} />
    </>
  );
};

export default NavigationScreen;
