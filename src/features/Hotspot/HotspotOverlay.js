import React, { useEffect, useCallback } from 'react';
import { compose } from 'redux';
import SafeArea from '../../components/SafeArea/SafeArea';
import Hotspot from './Hotspot';
import Scaler from '../../components/Scaler/Scaler';
import {
  InjectHotspotProps,
  InjectPlayerProps
} from '../../store/redux/providers';
import useTimeRange from '../../hooks/useTimeRange';

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

  const handleAction = useCallback((action) => {
    // const { name, params } = action;
    // if (name === 'openOverlay') {
    //   addActiveId(params[0]);
    // }
  }, []);

  return (
    <div
      className="vibuy--hotspot-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          {activeHotspotIds.map((id) => {
            return (
              <Hotspot
                key={id}
                top={`${hotspots[id].top}`}
                left={`${hotspots[id].left}`}
                action={() => handleAction(hotspots[id].action)}
              />
            );
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
