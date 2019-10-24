/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';

// import { ADD_WATCHED_LIST } from '../../features/Watchlist/WatchListQueries';
// import { IS_LOGGED_IN } from '../../features/ShoppingCart/shoppingCartQueries';
import { Wrapper } from './ScreenReady.style';
import withQueryProdLink from '../HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_HEADER_COMPANY_CAMPAING } from '../../Queries/ProdLink/ProdLinkQuery';

const FullScreenImage = ({ imageUrl, data: { prodLink } }) => {
  const image = prodLink && prodLink.image && prodLink.image.imageUrl;
  // console.log(prodLink.image);
  return (
    <Wrapper>
      <div className="container-ready-screen" style={{ opacity: '1' }}>
        <div style={styles.bg}>
          <img
            style={styles.bgImg}
            alt="Ready Screen"
            src={imageUrl ? imageUrl : image}></img>
        </div>
      </div>
    </Wrapper>
  );
};

const styles = {
  bg: {
    position: 'fixed',
    width: '100%',
    height: '100%'
  },
  bgImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999,
    margin: 'auto',
    width: '100%',
    height: '100%'
  }
};

export default withQueryProdLink(FullScreenImage, GET_HEADER_COMPANY_CAMPAING);

// {
/* <Mutation
      mutation={ADD_WATCHED_LIST}
      // variables={{ prodLinkId: PRODLINK_ID }}
      // update={(cache, { data }) => updateCache(cache, data)}
    >
      {(addProdLinkToWatchList, { client }) => {
        return (
          <Wrapper>
            <div className="container-ready-screen">
              <div
                role="button"
                className="container-button"
                onClick={() => {
                  videoPlayer.play();
                  addToWatchList(client, addProdLinkToWatchList);
                }}
              />
            </div>
          </Wrapper>
        );
      }}
    </Mutation> */
// }
