import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import HotspotCard from './HotspotCard';
import { Wrapper } from './HotspotCardList.style';

const HotspotCardList = ({ styles, hotspotProducts }) => {
  const hotspotProductIds = useMemo(() => Object.keys(hotspotProducts), [
    hotspotProducts
  ]);

  const hotspotCardClickCb = useCallback(() => {}, []);

  return (
    <Wrapper className="vb--hotspot-card-list" styles={styles}>
      <div className="vb--hotspot-card-list-header">
        <span>Click & Buy</span>
      </div>
      <div className="vb--hotspot-card-list-cards">
        {hotspotProductIds.map((id) => {
          return (
            <HotspotCard
              key={id}
              product={hotspotProducts[id]}
              click={hotspotCardClickCb}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

HotspotCardList.propTypes = {
  styles: PropTypes.object,
  hotspotProducts: PropTypes.object.isRequired
};

HotspotCardList.defaultProps = {
  styles: {}
};

export default HotspotCardList;
