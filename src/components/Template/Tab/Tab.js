/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { ComponentsService } from './ComponentService';

function buildMenu(tabs, callback, tab) {
  return tabs.map((item) => (
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
export const Tab = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0].key);
  const Component = ComponentsService[tab];
  return (
    <>
      <div className="sub-Menu">
        <div className="subMenu--linksWithIcons">
          <div className="subMenu--linksWrapper">
            {buildMenu(tabs, setTab, tab)}
            <div className="subMenu--statsWrapper">
              <div className="stats--content">
                <i className="stats--content--likeIcon"></i> 24
              </div>
              {/* add 'loved' class name beside 'watchlist--heartIcon' class to display red heart */}
              <div className="stats--content stats--content--heart">
                <i className="stats--content--heartIcon"></i> 40
              </div>
              <div className="stats--content">
                <i className="stats--content--shareIcon"></i> 325
              </div>
            </div>
            <hr className="subMenu--underline" />
            <div className="subMenu--profileInfo">
              <img
                src="/images/dp.png"
                className="subMenu--profileInfo--img"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
      <Component content="my products" />
    </>
  );
};
