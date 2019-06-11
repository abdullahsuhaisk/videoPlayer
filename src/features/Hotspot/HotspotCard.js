import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './HotspotCard.style';

const HotspotCard = ({ styles, product, click }) => {
  return (
    <Wrapper className="hotspot-card" styles={styles} onClick={() => click()}>
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.assets.images[0]}` }}
      />
    </Wrapper>
  );
};

HotspotCard.propTypes = {
  styles: PropTypes.object,
  product: PropTypes.object.isRequired,
  click: PropTypes.func
};

HotspotCard.defaultProps = {
  styles: {},
  click: () => {}
};

export default HotspotCard;
