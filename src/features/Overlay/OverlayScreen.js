import React from 'react';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import AuthScreen from '../Auth/AuthScreen';
import ProductListScreen from '../Product/ProductList/ProductListScreen';
import HotspotScreen from '../Hotspot/HotspotScreen';
import ProductDetailsScreen from '../Product/ProductDetails/ProductDetailsScreen';
import NavigationScreen from '../NavigationScreen/NavigationScreen';

const OverlayScreen = () => {
  return (
    <div
      className="vb--overlay-screen"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <ProductDetailsScreen />
          <ProductListScreen />
          <HotspotScreen />
          <AuthScreen />
          <NavigationScreen />
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default OverlayScreen;
