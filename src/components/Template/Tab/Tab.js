/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { ApolloConsumer, Query } from 'react-apollo';

import { ComponentsService } from './ComponentService';
import ProfileButton from './ProfileButton';
import LikeButtonScreen from './LikeButtonScreen';

import WatchListButton from './WatchListButton';
import Share from './Share';
import ShareModal from './ShareModal';

function buildMenu(tabs, callback, tab, client) {
  return tabs.map((item) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item.title}
      onClick={() => {
        client.writeData({ data: { isProfileOpen: false } });
        callback(item.key);
      }}
      className={
        'subMenu--link' + (item.key === tab ? ' subMenu--link--active' : '')
      }>
      <a>{item.title}</a>
    </li>
  ));
}
// TODO: SCALABLE FOR TAB CONTENT
export const Tab = ({ tabs, children }) => {
  const [tab, setTab] = useState(tabs[0].key);
  const [showShareModal, setShowShareModal] = useState(false);
  const Component = ComponentsService[tab];
  return (
    <>
      <ApolloConsumer>
        {(client) => {
          return (
            <>
              <div className="sub-Menu">
                <div className="subMenu--linksWithIcons">
                  <ul className="subMenu--linksWrapper">
                    {buildMenu(tabs, setTab, tab, client)}
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
      </ApolloConsumer>
    </>
  );
};
