import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { ApolloConsumer } from 'react-apollo';
import { Wrapper } from './HotspotCard.style';
import NoImageSmall from '../../assets/images/NoImageSmall.png';
import { PLAYER } from '../../common/constants';

const HotspotCard = ({ styles, hotspot }) => {
  const { product } = hotspot;
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <Fade right duration="500">
            <Wrapper
              className="vb--hotspot-card"
              styles={styles}
              onClick={() =>
                client.writeData({
                  data: {
                    player: {
                      __typename: 'Player',
                      playingState: PLAYER.PAUSED
                    },
                    productIdInDetails: product.id
                  }
                })
              }>
              <div
                className="vb--hotspot-card-product-image"
                style={{
                  backgroundImage: `url(${(product.image &&
                    product.image.imageUrl) ||
                    NoImageSmall}`
                }}
              />
            </Wrapper>
          </Fade>
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
