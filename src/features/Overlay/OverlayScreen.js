import React from 'react';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import AuthScreen from '../Auth/AuthScreen';
import ProductListScreen from '../Product/ProductList/ProductListScreen';
import HotspotScreen from '../Hotspot/HotspotScreen';

const OverlayScreen = () => {
  return (
    <div
      className="vibuy--interactive-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <ProductListScreen />
          <HotspotScreen />
          <AuthScreen />
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default OverlayScreen;
