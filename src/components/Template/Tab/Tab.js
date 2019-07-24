import React, { useState } from 'react';
import { ComponentsService } from './ComponentService';

function buildMenu(tabs, callback, tab) {
  return tabs.map((item) => (
    <button
      key={item.title}
      onClick={() => callback(item.key)}
      className={
        'subMenu--link' + (item.key === tab ? 'subMenu--link--active' : '')
      }>
      {item.title}
    </button>
  ));
}
// TODO: SCALABLE FOR TAB CONTENT
export const Tab = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0].key);
  const Component = ComponentsService[tab];
  return (
    <>
      <div className="sub-Menu">
        <div className="subMenu--linksWrapper">
          {buildMenu(tabs, setTab, tab)}
          <div className="subMenu--underline"></div>
          <Component content="my products" />
        </div>
      </div>
    </>
  );
};
