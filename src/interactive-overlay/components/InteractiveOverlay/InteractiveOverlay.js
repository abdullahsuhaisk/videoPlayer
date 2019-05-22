import React, { useEffect } from 'react';
import {
  InjectOverlayProps,
  InjectPlayerProps
} from '../../../store/redux/providers';
import useTimeRange from '../../hooks/useTimeRange';
import SafeArea from '../SafeArea/SafeArea';
import { overlayTypes } from '../../../store/redux/overlay/overlayActions';
// import ProfileButton from '../ProfileButton/ProfileButton';
import Scaler from '../Scaler/Scaler';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import ForgotPassword from '../ForgotPassword/ForgotPassword';
// import Favorite from '../Favorite/Favorite';
// import Share from '../Share/Share';
// import Title from '../Title/Title';
// import Tabs from '../Tabs/Tabs';

const playingOverlayFilter = {
  key: 'type',
  value: overlayTypes.playing
};

const widgets = {
  Like: React.lazy(() => import('../Like/Like')),
  Favorite: React.lazy(() => import('../Favorite/Favorite'))
};

const InteractiveOverlay = (props) => {
  const {
    overlays,
    activePlayingOverlayIds,
    setActivePlayingOverlayIds,
    currentTime,
    playing
  } = props;

  const playingOverlayIds = useTimeRange(
    overlays,
    currentTime,
    playingOverlayFilter
  );

  useEffect(() => {
    setActivePlayingOverlayIds(playingOverlayIds);
  }, [playingOverlayIds]);

  return (
    <div
      className="vibuy--interactive-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          {/* <Title />
          <Tabs />
          <Like />
          <Favorite />
          <Share />
          <ProfileButton />
          <Login />
          <Register />
          <ForgotPassword /> */}
          {playing &&
            activePlayingOverlayIds.map((id) => {
              const { widgetType } = overlays[id];

              if (widgetType) {
                const LazyComponent = widgets[widgetType];

                return (
                  <React.Suspense
                    fallback={<div className="vibuy--component-loading" />}
                    key={id}>
                    <LazyComponent />
                  </React.Suspense>
                );
              }

              return <div key={id}>{id}</div>;
            })}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default InjectPlayerProps(
  InjectOverlayProps(InteractiveOverlay, {
    selectActions: ({ setActivePlayingOverlayIds }) => ({
      setActivePlayingOverlayIds
    }),
    selectProps: ({ overlays, activePlayingOverlayIds }) => ({
      overlays,
      activePlayingOverlayIds
    })
  }),
  {
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }
);
