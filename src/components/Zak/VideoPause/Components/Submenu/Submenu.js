import React from 'react';

const Submenu = (props) => {
  return (
    <React.Fragment>
      <div className="sub-Menu">
        <div className="subMenu--linksWithIcons">
          <ul className="subMenu--linksWrapper">
            {props.Menu.map((menu) => {
              let classes = 'subMenu--link';
              classes +=
                menu.page == props.page ? ' subMenu--link--active' : '';
              classes += menu.haveBullet ? ' subMenu--link-bullet' : '';
              return (
                <li
                  className={classes}
                  onClick={() => props.setPage(menu.page)}
                  key={menu.page}>
                  <a>{menu.name}</a>
                </li>
              );
            })}
          </ul>
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
        </div>
        <div className="subMenu--profileInfo">
          <img src="/images/dp.png" className="subMenu--profileInfo--img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Submenu;
