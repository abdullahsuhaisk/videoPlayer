import React from 'react';
import PropTypes from 'prop-types';
import HotspotCard from './HotspotCard';
import { Wrapper } from './HotspotCardList.style';
import VerticalScroll from '../../components/VerticalScroll';

const HotspotCardList = ({ styles, hotspots }) => {
  // console.log(hotspots);
  return (
    <React.Fragment>
      <div className="vb--hotspot-card-list-header">
        <span>Click & Buy</span>
      </div>
      <Wrapper className="vb--hotspot-card-list" styles={styles}>
        <VerticalScroll style={{ width: '100%' }}>
          <div className="vb--hotspot-card-list-cards">
            {hotspots &&
              hotspots.map((hotspot) => {
                return <HotspotCard key={hotspot.id} hotspot={hotspot} />;
              })}
          </div>
        </VerticalScroll>
      </Wrapper>
    </React.Fragment>
  );
};

HotspotCardList.propTypes = {
  styles: PropTypes.object
};

HotspotCardList.defaultProps = {
  styles: {}
};

export default HotspotCardList;
