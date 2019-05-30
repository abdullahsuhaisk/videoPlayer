import React, { useEffect } from 'react';
import { compose } from 'redux';
import SafeArea from '../../components/SafeArea/SafeArea';
import Scaler from '../../components/Scaler/Scaler';
import {
  InjectHotspotProps,
  InjectPlayerProps
} from '../../store/redux/providers';
import useTimeRange from '../../hooks/useTimeRange';
import HotspotCard from './HotspotCard';

const HotspotOverlay = (props) => {
  const {
    hotspots,
    activeHotspotIds,
    setActiveHotspotIds,
    currentTime
  } = props;

  const currentActiveHotspotIds = useTimeRange(hotspots, currentTime);

  useEffect(() => {
    setActiveHotspotIds(currentActiveHotspotIds);
  }, [currentActiveHotspotIds]);

  return (
    <div
      className="vibuy--hotspot-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          {activeHotspotIds.map((id) => {
            return <HotspotCard key={id} title={id} />;
          })}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default compose(
  InjectPlayerProps({
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ currentTime }) => ({ currentTime })
  }),
  InjectHotspotProps({
    selectActions: ({ setActiveHotspotIds }) => ({ setActiveHotspotIds }),
    selectProps: ({ hotspots, activeHotspotIds }) => ({
      hotspots,
      activeHotspotIds
    })
  })
)(HotspotOverlay);
