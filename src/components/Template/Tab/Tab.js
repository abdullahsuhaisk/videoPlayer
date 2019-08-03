/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { ComponentsService } from './ComponentService';
import ProfileButton from './ProfileButton';
import Like from './Like';
import UnLike from './UnLike';

import Favorite from './Favorite';
import Share from './Share';

function buildMenu(tabs, callback, tab) {
  return tabs.map((item) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item.title}
      onClick={() => callback(item.key)}
      className={
        'subMenu--link' + (item.key === tab ? 'subMenu--link--active' : '')
      }>
      <a>{item.title}</a>
    </li>
  ));
}
// TODO: SCALABLE FOR TAB CONTENT
export const Tab = ({ tabs, children }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [tab, setTab] = useState(tabs[0].key);
  const Component = ComponentsService[tab];
  return (
    <>
      <div className="sub-Menu">
        <div className="subMenu--linksWithIcons">
          <ul className="subMenu--linksWrapper">
            {buildMenu(tabs, setTab, tab)}
          </ul>
          <div className="subMenu--statsWrapper">
            {isLiked === true ? (
              <UnLike setIsLiked={setIsLiked} />
            ) : (
              <Like setIsLiked={setIsLiked} />
            )}
            <Favorite />
            <Share />
          </div>
          <hr className="subMenu--underline" />
          <ProfileButton />
        </div>
      </div>
      <Component content="my products" />
    </>
  );
};
