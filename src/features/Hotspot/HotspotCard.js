import React from 'react';
import PropTypes from 'prop-types';

import { ApolloConsumer } from 'react-apollo';
import { Wrapper, BouncyDiv } from './HotspotCard.style';

import { PLAYER } from '../../common/constants';

const HotspotCard = ({ styles, hotspot }) => {
  const { product } = hotspot;

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <BouncyDiv>
            <Wrapper
              className="vb--hotspot-card"
              styles={styles}
              onClick={() =>
                client.writeData({
                  data: {
                    player: {
                      __typename: 'Player',
                      playingState: PLAYER.PAUSED
                    }
                  }
                })
              }>
              <div
                className="vb--hotspot-card-product-image"
                style={{ backgroundImage: `url(${product.image.imageUrl}` }}
              />
            </Wrapper>
          </BouncyDiv>
        );
      }}
    </ApolloConsumer>
  );
};

HotspotCard.propTypes = {
  styles: PropTypes.object,
  hotspot: PropTypes.object.isRequired
};

HotspotCard.defaultProps = {
  styles: {}
};

export default HotspotCard;
