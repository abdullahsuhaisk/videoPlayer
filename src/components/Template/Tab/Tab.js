import React, { useState } from 'react';
import { ComponentsService } from './ComponentService';

// const jsonTemplate = {
//   tabs: [
//     {
//       title: 'login',
//       key: 'product'
//     },
//     {
//       title: 'wishList',
//       key: 'wishList'
//     }
//   ]
// };

function buildMenu(tabs, callback) {
  return tabs.map((item) => (
    <button
      style={{ margin: '20px', border: 'solid 1px red' }}
      key={item.title}
      onClick={() => callback(item.key)}>
      {item.title}
    </button>
  ));
}

export const Tab = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0].key);
  const Component = ComponentsService[tab];
  return (
    <>
      {buildMenu(tabs, setTab)}
      <hr />
      <div className="App">
        <Component content="my products" />
      </div>
    </>
  );
};
