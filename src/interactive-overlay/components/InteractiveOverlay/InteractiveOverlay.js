import React, { useEffect } from 'react';
import {
  InjectOverlayProps,
  InjectPlayerProps
} from '../../../store/redux/providers';
// import useTimeRange from '../../hooks/useTimeRange';
import SafeArea from '../SafeArea/SafeArea';
// import { overlayTypes } from '../../../store/redux/overlay/overlayActions';
import Scaler from '../Scaler/Scaler';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import ForgotPassword from '../ForgotPassword/ForgotPassword';
// import Favorite from '../Favorite/Favorite';
// import Share from '../Share/Share';
// import Title from '../Title/Title';
// import Tabs from '../Tabs/Tabs';
// import ComponentLoading from '../ComponentLoading/ComponentLoading';
import ProductListScreen from '../../screens/ProductList/ProductListScreen';

// const playingOverlayFilter = {
//   key: 'type',
//   value: overlayTypes.playing
// };

// const widgets = {
//   Like,
//   Favorite,
//   ProfileButton
// };

const InteractiveOverlay = (props) => {
  const {
    overlays,
    activePlayingOverlayIds,
    setActivePlayingOverlayIds,
    activePausedOverlayIds,
    setActivePausedOverlayIds,
    currentTime,
    playing
  } = props;

  // const playingOverlayIds = useTimeRange(
  //   overlays,
  //   currentTime,
  //   playingOverlayFilter
  // );

  // useEffect(() => {
  //   setActivePlayingOverlayIds(playingOverlayIds);
  // }, [playingOverlayIds]);

  // useEffect(() => {
  //   if (!playing) {
  //     const pausedOverlayIds = Object.keys(overlays).filter((id) => {
  //       return overlays[id].type === overlayTypes.paused ? id : null;
  //     });

  //     setActivePausedOverlayIds(pausedOverlayIds);
  //   }
  // }, [playing]);

  return (
    <div
      className="vibuy--interactive-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          <ProductListScreen />
          {/* <Title />
          <Tabs /> */}
          {/* <Favorite /> */}
          {/* <Share /> */}
          {/* <Login />
          <Register />
          <ForgotPassword />
          {playing &&
            activePlayingOverlayIds.map((id) => {
              const { widgetType } = overlays[id];

              if (widgetType) {
                const LazyComponent = widgets[widgetType];

                return (
                  <React.Suspense fallback={<ComponentLoading />} key={id}>
                    <LazyComponent />
                  </React.Suspense>
                );
              }

              return <div key={id}>{id}</div>;
            })}
          {!playing &&
            activePausedOverlayIds.map((id) => {
              const { widgetType } = overlays[id];

              if (widgetType) {
                const LazyComponent = widgets[widgetType];

                return (
                  <React.Suspense fallback={<ComponentLoading />} key={id}>
                    <LazyComponent />
                  </React.Suspense>
                );
              }

              return <div key={id}>{id}</div>;
            })} */}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default InjectPlayerProps(
  InjectOverlayProps(InteractiveOverlay, {
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
  }),
  {
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }
);
