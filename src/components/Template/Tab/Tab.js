/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { ApolloConsumer, Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { ComponentsService } from './ComponentService';
import ProfileButton from './ProfileButton';
import LikeButtonScreen from './LikeButtonScreen';

import WatchListButton from './WatchListButton';
import Share from './Share';
import ShareModal from './ShareModal';

const GET_RENDERING_TAB_ITEM = gql`
  query getRenderingItem {
    whichTabItemIsRendering @client
  }
`;

function buildMenu(tabs, callback, tab, client, whichTabItemIsRendering) {
  if (!tab) return null;
  if (!tabs) return null;

  return tabs.map((item) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item.title}
      onClick={() => {
        client.writeData({ data: { isProfileOpen: false } });
        client.writeData({
          data: { whichTabItemIsRendering: item.key }
        });
        callback(item.key);
      }}
      className={
        'subMenu--link' +
        (item.key === whichTabItemIsRendering ? ' subMenu--link--active' : '')
      }>
      <a>{item.title}</a>
    </li>
  ));
}
// TODO: SCALABLE FOR TAB CONTENT
const Tab = ({ tabs, children, client }) => {
  const [tab, setTab] = useState('productInThisScene');
  const [showShareModal, setShowShareModal] = useState(false);
  // React.useEffect(() => {
  //   client
  //     .query({
  //       query: GET_RENDERING_TAB_ITEM,
  //       variables: {}
  //     })
  //     .then((data) => console.log(data));
  //   setTab();
  // }, []);
  // console.log(tab);
  // console.log(Item);

  if (!tab) {
    return null;
  }
  return (
    <Query query={GET_RENDERING_TAB_ITEM}>
      {({ data: { whichTabItemIsRendering } }, loading, error) => {
        if (loading || error) return null;
        // console.log(whichTabItemIsRendering);
        const Component = ComponentsService[whichTabItemIsRendering];
        return (
          <>
            <div className="sub-Menu">
              <div className="subMenu--linksWithIcons">
                <ul className="subMenu--linksWrapper">
                  {buildMenu(
                    tabs,
                    setTab,
                    tab,
                    client,
                    whichTabItemIsRendering
                  )}
                </ul>
                <div className="subMenu--statsProfileWrapper">
                  <div className="subMenu--statsWrapper">
                    <LikeButtonScreen />
                    <WatchListButton client={client} />
                    <Share setShowShareModal={setShowShareModal} />
                  </div>
                  <ProfileButton />
                </div>
                <hr className="subMenu--underline" />
              </div>
            </div>
            {showShareModal ? (
              <ShareModal setShowShareModal={setShowShareModal} />
            ) : null}
            <Component content="my products" client={client} />
          </>
        );
      }}
    </Query>
  );
};
export default withApollo(Tab);
/*
grapql must know which elements should be render
and Component must came from grapql
*/
