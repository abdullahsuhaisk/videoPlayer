import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {
  InjectOverlayProps,
  InjectPlayerProps
} from '../../store/redux/providers';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import AuthScreen from '../Auth/AuthScreen';
import ProductListScreen from '../Product/ProductList/ProductListScreen';
import HotspotScreen from '../Hotspot/HotspotScreen';

const OverlayScreen = ({ playing }) => {
  return (
    <div
      className="vibuy--interactive-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          {!playing && <ProductListScreen />}
          {playing && <HotspotScreen />}
          <AuthScreen />
        </Scaler>
      </SafeArea>
    </div>
  );
};

OverlayScreen.propTypes = {
  playing: PropTypes.bool.isRequired
};

export default compose(
  InjectPlayerProps({
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }),
  InjectOverlayProps({
    selectActions: ({
      setActivePlayingOverlayIds,
      setActivePausedOverlayIds
    }) => ({
      setActivePlayingOverlayIds,
      setActivePausedOverlayIds
    }),
    selectProps: ({
      overlays,
      activePlayingOverlayIds,
      activePausedOverlayIds
    }) => ({
      overlays,
      activePlayingOverlayIds,
      activePausedOverlayIds
    })
  })
)(OverlayScreen);
