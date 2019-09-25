/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { getProdLinkIdApollo } from '../../hooks/ProdLinkHook';
import LikeLottie from '../Lottie/Like/LikeLottie';

const GET_LIKED = gql`
  query prodLinkIsLikedByCustomer($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      # isLiked
      numberOfLikes
      numberOfViews
      numberOfShares
    }
  }
`;

const LikeButtonScreen = ({ client }) => {
  const PRODLINK_ID = parseInt(getProdLinkIdApollo(client), 10);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(35);

  return (
    <Query query={GET_LIKED} variables={{ prodLinkId: PRODLINK_ID }}>
      {({ data, error, loading }) => {
        if (loading || error) return <Like />;
        // setIsLiked(data.isLiked ? data.isLiked : false);
        return isLiked === true ? (
          <UnLike
            PRODLINK_ID={PRODLINK_ID}
            setIsLiked={setIsLiked}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
        ) : (
          <Like
            PRODLINK_ID={PRODLINK_ID}
            setIsLiked={setIsLiked}
            likeCount={likeCount}
            setLikeCount={setLikeCount}
          />
        );
      }}
    </Query>
  );
};

const Like = ({ PRODLINK_ID, setIsLiked, likeCount, setLikeCount }) => {
  const [animate, setAnimate] = React.useState(true);
  const updateHandler = () => {
    setLikeCount(likeCount + 1);
    setIsLiked(true);
  };
  return (
    <div
      className="stats--content stats--content--heart"
      onClick={() => {
        setAnimate(false);
        setLikeCount(likeCount + 1);
        setIsLiked(true);
      }}>
      <LikeLottie animate={animate} switcher={() => updateHandler} />
      {likeCount}
    </div>
  );
};

const UnLike = ({ setIsLiked, PRODLINK_ID, likeCount, setLikeCount }) => {
  return (
    <div className="stats--content stats--content--heart loved">
      <i
        className={`stats--content--heartIcon`}
        onClick={() => {
          setIsLiked(false);
          setLikeCount(likeCount - 1);
        }}></i>
      {likeCount}
    </div>
  );
};

export default withApollo(LikeButtonScreen);
