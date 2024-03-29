import React from 'react';
// import '../../assets/css/template1/Submenu.css';

const StaticSubMenu = (props) => {
  return (
    <React.Fragment>
      <div className="sub-Menu">
        <div className="subMenu--linksWithIcons">
          <ul className="subMenu--linksWrapper">
            <li className="subMenu--link subMenu--link--active">
              <a>Products in this Scene</a>
            </li>
            <li className="subMenu--link">
              <a>All Products</a>
            </li>
            <li className="subMenu--link">
              <a>Suggested Products</a>
            </li>
            <li className="subMenu--link subMenu--link-bullet">
              <a>Wishlist</a>
            </li>
            <li className="subMenu--link">
              <a>Watchlist</a>
            </li>
            <li className="subMenu--link">
              <a>Shopping Cart</a>
            </li>
          </ul>
          <div className="subMenu--statsWrapper">
            {/* add 'loved' class name beside 'stats--content--heart' class to display red heart */}
            <div className="stats--content stats--content--heart">
              <i className="stats--content--heartIcon"></i> 24
            </div>
            {/* add 'favorite' class name beside 'stats--content--star' class to display yellow star */}
            <div className="stats--content stats--content--star">
              <i className="stats--content--starIcon"></i> 40
            </div>
            <div className="stats--content">
              <i className="stats--content--shareIcon"></i> 325
            </div>
          </div>
          <hr className="subMenu--underline" />
        </div>
        <div className="subMenu--profileInfo">
          <img src="/images/dp.png" className="subMenu--profileInfo--img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaticSubMenu;
