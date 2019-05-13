import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import SafeArea from '../SafeArea/SafeArea';
import Hotspot from '../Hotspot';
import Scaler from '../Scaler/Scaler';
import { InjectHotspotOperations } from '../../../store/redux/hotspot/hotspotOperations';
import { InjectPlayerOperations } from '../../../store/redux/player/playerOperations';
import { findPrev } from '../../utils/common';
import { InjectOverlayOperations } from '../../../store/redux/overlay/overlayOperations';

const HotspotOverlay = (props) => {
  const { hotspots, currentTime } = props;
  const [activeHotspots, setActiveHotspots] = useState({});

  const result = useMemo(() => {
    const inOuts = [];
    const optimizedResult = {};

    // eslint-disable-next-line array-callback-return
    const hotspotIds = Object.keys(hotspots);

    hotspotIds.forEach((id) => {
      if (!inOuts.includes(hotspots[id].in)) {
        inOuts.push(hotspots[id].in);
      }

      if (!inOuts.includes(hotspots[id].out)) {
        inOuts.push(hotspots[id].out);
      }
    });

    inOuts.sort((a, b) => a - b);

    inOuts.forEach((time) => {
      const arr = hotspotIds.filter(
        (id) => hotspots[id].in <= time && hotspots[id].out > time
      );

      optimizedResult[time] = arr;
    });

    return optimizedResult;
  }, []);

  useEffect(() => {
    const activeTime = findPrev(Object.keys(result), currentTime);
    const currentHotspots = result[activeTime].reduce((acc, id) => {
      acc[id] = hotspots[id];
      return acc;
    }, {});

    const nextState = { ...currentHotspots };
    setActiveHotspots(nextState);
  }, [currentTime]);

  const handleAction = useCallback((action) => {
    const { name, params } = action;

    if (name === 'openOverlay') {
      // addActiveId(params[0]);
    }
  }, []);

  return (
    <div
      className="vibuy--hotspot-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        <Scaler>
          {Object.keys(activeHotspots).map((id) => (
            <Hotspot
              key={id}
              top={`${activeHotspots[id].top}`}
              left={`${activeHotspots[id].left}`}
              action={() => handleAction(activeHotspots[id].action)}
            />
          ))}
        </Scaler>
      </SafeArea>
    </div>
  );
};

export default InjectPlayerOperations(
  InjectHotspotOperations(
    InjectOverlayOperations(HotspotOverlay, {
      // selectActions: ({ addActiveId }) => ({ addActiveId })
    }),
    {
      selectActions: ({ onFieldUpdate, onAdd }) => ({ onFieldUpdate, onAdd }),
      selectProps: ({ hotspots }) => ({ hotspots })
    }
  ),
  {
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }
);
