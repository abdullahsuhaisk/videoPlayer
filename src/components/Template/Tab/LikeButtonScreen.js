/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Mutation, Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

// import { IS_LOGGED_IN } from '../../../features/ShoppingCart/shoppingCartQueries';
import { getProdLinkIdApollo } from '../../../hooks/ProdLinkHook';
import {
  ADD_WATCH_LIST,
  GET_CONSUMER_WATCHLIST,
  DELETE_WATCHED_LIST
} from '../../../features/Watchlist/WatchListQueries';
import LikeLottie from '../../Lottie/Like/LikeLottie';

// const updateCache = () => {};

// const addToWatchList = async (client, addProdLinkToWatchList, PRODLINK_ID) => {
// const { isLoggedIn } = client.readQuery({
//   query: IS_LOGGED_IN
// });
// if (isLoggedIn) {
//   await addProdLinkToWatchList({ variables:  {PRODLINK_ID}  });

// } else {
//   // client.writeData({ data: { isLoginFormShowing: true } });
//   return null;
// }
//   await addProdLinkToWatchList({ variables: { prodLinkId: PRODLINK_ID } });
// };

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
  return (
    <Query query={GET_LIKED} variables={{ prodLinkId: PRODLINK_ID }}>
      {({ data, error, loading }) => {
        if (loading || error) return <Like />;
        // setIsLiked(data.isLiked ? data.isLiked : false);
        return isLiked === true ? (
          <UnLike PRODLINK_ID={PRODLINK_ID} setIsLiked={setIsLiked} />
        ) : (
          <Like PRODLINK_ID={PRODLINK_ID} setIsLiked={setIsLiked} />
        );

        // <LikeDummy data={data} />
      }}
    </Query>
  );
};

const Like = ({ PRODLINK_ID, setIsLiked }) => {
  const [animate, setAnimate] = React.useState(true);
  return (
    <Mutation
      mutation={ADD_WATCH_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}>
      {(addProdLinkToWatchList, { client, loading, error }) => {
        if (loading || error) {
          return 'loading';
        }
        const updateHandler = () => {
          addProdLinkToWatchList();
          // addToWatchList(client, addProdLinkToWatchList, PRODLINK_ID);
          setIsLiked(true);
        };
        return (
          <div
            className="stats--content stats--content--heart"
            onClick={() => {
              setAnimate(false);
            }}>
            {/* <i
              className={`stats--content--heartIcon`}
              onClick={() => {
                addToWatchList(client, addProdLinkToWatchList, PRODLINK_ID);
                // setIsLiked(true);
              }}></i> */}
            <LikeLottie animate={animate} switcher={updateHandler} />
            24
          </div>
        );
      }}
    </Mutation>
  );
};

const UnLike = ({ setIsLiked, PRODLINK_ID }) => {
  return (
    <Mutation
      mutation={DELETE_WATCHED_LIST}
      variables={{ prodLinkId: PRODLINK_ID }}
      refetchQueries={() => {
        return [
          {
            query: GET_CONSUMER_WATCHLIST
          }
        ];
      }}>
      {(deleteProdLinkFromWatchList, { client, loading, error }) => {
        if (loading || error) {
          return 'loading';
        }
        return (
          <div className="stats--content stats--content--heart loved">
            <i
              className={`stats--content--heartIcon`}
              onClick={() => {
                deleteToWatchList(
                  client,
                  deleteProdLinkFromWatchList,
                  PRODLINK_ID
                );
                setIsLiked(false);
              }}></i>
            24
          </div>
        );
      }}
    </Mutation>
  );
};

const deleteToWatchList = async (
  client,
  addProdLinkToWatchList,
  PRODLINK_ID
) => {
  // const { isLoggedIn } = client.readQuery({
  //   query: IS_LOGGED_IN
  // });
  // if (isLoggedIn) {
  //   await addProdLinkToWatchList({ variables:  {PRODLINK_ID}  });

  // } else {
  //   // client.writeData({ data: { isLoginFormShowing: true } });
  //   return null;
  // }
  await addProdLinkToWatchList({ variables: { prodLinkId: PRODLINK_ID } });
};

// const LikeDummy = ({ data }) => {
//   const [likeCss, setLikeCss] = useState(null);
//   const [likeCount, setLikeCount] = useState(null);
//   React.useEffect(() => {
//     setLikeCount(data.prodLink.numberOfLikes);
//   }, [data]);
//   const countChanger = (bool) => {
//     if (bool) {
//       setLikeCss('loved');
//       setLikeCount(likeCount + 1);
//     } else {
//       setLikeCss('');
//       setLikeCount(likeCount - 1);
//     }
//   };
//   return (
//     <div className={`stats--content stats--content--heart ${likeCss}`}>
//       <i
//         className={`stats--content--heartIcon`}
//         onClick={() => {
//           !likeCss ? countChanger(true) : countChanger(false);
//         }}></i>
//       {
//         // data.prodLink && data.prodLink.numberOfLikes
//         likeCount
//       }
//     </div>
//   );
// };

export default withApollo(LikeButtonScreen);
