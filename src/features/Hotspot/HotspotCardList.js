import React from 'react';
import PropTypes from 'prop-types';
import HotspotCard from './HotspotCard';
import { Wrapper } from './HotspotCardList.style';

const HotspotCardList = ({ styles, hotspots }) => {
  return (
    <Wrapper className="vb--hotspot-card-list" styles={styles}>
      <div className="vb--hotspot-card-list-header">
        <span>Click & Buy</span>
      </div>
      <div className="vb--hotspot-card-list-cards">
        {hotspots.map((hotspot) => {
          return <HotspotCard key={hotspot.id} hotspot={hotspot} />;
        })}
      </div>
    </Wrapper>
  );
};

HotspotCardList.propTypes = {
  styles: PropTypes.object,
  hotspots: PropTypes.array.isRequired
};

HotspotCardList.defaultProps = {
  styles: {}
};

export default HotspotCardList;
