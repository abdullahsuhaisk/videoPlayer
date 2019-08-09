/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Mutation } from 'react-apollo';
import { GET_CONSUMER_WATCHLIST } from './WatchListQueries';
import {
  LIKE_PRODLINK,
  UNLIKE_PRODLINK,
  ADD_PRODLINK_TO_FAVORITE,
  DELETE_PRODLINK_TO_FAVORITE
} from '../../components/Base/BaseQueries';

const Like = ({ numberOfLikes, prodLinkId }) => {
  console.log('Like');
  return (
    <Mutation
      mutation={LIKE_PRODLINK}
      variables={{ prodLinkId }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}>
      {(likeProdLink, { client, loading, error }) => {
        if (loading || error) {
          return null;
        }
        return (
          <div
            className="watchlist--iconCintainer"
            onClick={() => likeProdLink()}>
            <i className="watchlist--heartIcon"></i> {numberOfLikes}
          </div>
        );
      }}
    </Mutation>
  );
};
const UnLike = ({ numberOfLikes, prodLinkId }) => {
  return (
    <Mutation
      mutation={UNLIKE_PRODLINK}
      refetchQueries={() => {
        console.log('refetchQueries');
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}
      variables={{ prodLinkId }}>
      {(unlikeProdLink, { client, loading, error }) => {
        if (loading || error) {
          return null;
        }
        return (
          <div
            className="watchlist--iconCintainer"
            onClick={() => unlikeProdLink()}>
            <i className="watchlist--heartIcon loved"></i> {numberOfLikes}
          </div>
        );
      }}
    </Mutation>
  );
};

const WatchListCard = ({ item, favorites, LikedProdLinksIds }) => {
  // console.log(favorites);
  // console.log(item);

  const prodLinkId = item && item.id;
  const { campaign, company, video, image, brands } = item;
  // console.log(item);
  // console.log(campaign, company, video);
  const thumbnailUrl = image && image.thumbnailUrl;
  const itemDescription = item ? item.description : 'loading';
  // const brandsLogos = brands.map(
  //   (brand) => brand.logo && brand.logo.thumbnailUrl
  // );
  const companyLogo = company && company.logo && company.logo.thumbnailUrl;
  return (
    <React.Fragment>
      <div className="watchlist">
        <div className="watchlist--videoContainer">
          <figure className="watchlist--thumbnail">
            <img
              src={thumbnailUrl ? thumbnailUrl : '/images/watchlist1.png'}
              className="watchlist--thumbnail--img"
              alt={thumbnailUrl ? image.name : 'brand'}
            />
          </figure>
          <div className="watchlist--brand">
            <img
              src={companyLogo ? companyLogo : '/images/inditex.png'}
              className="watchlist--brand-img"
              alt={companyLogo ? company.name : 'brand'}
            />
            <span className="watchlist--brand-span">{company.name}</span>
          </div>
          <div className="watchlist--videoTime">
            <span className="watchlist--videoTimeValue">{video.duration}</span>
          </div>
        </div>
        <div className="watchlist--infoContainer">
          <div className="watchlist--brands">
            {/* {brandsLogos &&
              brands.map(
                (brand) =>
                  brand.logo && (
                    <img
                      src={brand.logo.thumbnailUrl}
                      className="watchlist--brands-icon"
                      alt={brand.name}
                    />
                  )
              )} */}
            <img
              src="/images/addidas-brand.png"
              className="watchlist--brands-icon"
              alt="adidas"
            />
            <img
              src="/images/nike-brand.png"
              className="watchlist--brands-icon"
              alt="nike"
            />
          </div>
          <h2 className="watchlist--infoContainer--h2">{item.name}</h2>
          <p className="watchlist--infoContainer--p">
            {itemDescription && itemDescription.slice(0, 200)}
          </p>
        </div>
        <hr className="watchlist--hr" />
        <div className="watchlist--viewsInfoContainer">
          <div className="watchlist--iconCintainer">
            <i className="watchlist--tagsIcon"></i> {item.numberOfShares}
          </div>
          {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}

          {/* <div className="watchlist--iconCintainer">
            <i className="watchlist--heartIcon"></i> {item.numberOfLikes}
          </div> */}
          <LikeUnLikeScreen
            numberOfLikes={item.numberOfLikes}
            prodLinkId={prodLinkId}
            LikedProdLinksIds={LikedProdLinksIds}
          />
          <div className="watchlist--iconCintainer">
            <i className="watchlist--eyeIcon"></i> {item.numberOfViews}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WatchListCard;

const LikeUnLikeScreen = ({ numberOfLikes, prodLinkId, LikedProdLinksIds }) => {
  // console.log(LikedProdLinksIds);
  // console.log(prodLinkId);
  const res =
    LikedProdLinksIds &&
    LikedProdLinksIds.filter((item) => item === prodLinkId);
  return res.length > 0 ? (
    <UnLike numberOfLikes={numberOfLikes} prodLinkId={prodLinkId} />
  ) : (
    <Like numberOfLikes={numberOfLikes} prodLinkId={prodLinkId} />
  );
};
