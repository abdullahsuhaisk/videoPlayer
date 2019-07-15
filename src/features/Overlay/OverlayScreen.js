import React, { useEffect } from 'react';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import ReadyScreen from './ReadyScreen/ReadyScreen';
// import AuthScreen from '../Auth/AuthScreen';
// import ProductListScreen from '../Product/ProductList/ProductListScreen';
// import HotspotScreen from '../Hotspot/HotspotScreen';
// import ProductDetailsScreen from '../Product/ProductDetails/ProductDetailsScreen';
// import NavigationScreen from '../NavigationScreen/NavigationScreen';

const LoadJsons = () => {
  // TODO: Set json method will make
  console.log('Template added');
};

const PlayerStateChange = (a) => {
  console.log(a, 'Playin state has changed');
};

const OverlayScreen = ({ playingState }) => {
  // const [json, setJson] = useState();
  useEffect(() => {
    // setJson(LoadJsons());
    LoadJsons();
  }, []);

  useEffect(() => {
    PlayerStateChange(playingState);
  }, [playingState]);

  return (
    <div
      className="vb--overlay-screen"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <ReadyScreen playingState={playingState} />

          {/* <HotspotScreen />
          <ProductListScreen />
          <ProductDetailsScreen />
          <NavigationScreen />
          <AuthScreen /> */}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default OverlayScreen;
