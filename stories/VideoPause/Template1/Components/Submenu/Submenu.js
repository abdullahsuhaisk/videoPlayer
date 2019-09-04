import React from 'react';

const Submenu = (props) => {
  const mainMenu = props.Menu.filter((content) => content.display === true);
  return (
    <React.Fragment>
      <div className="sub-Menu">
        <div className="subMenu--linksWithIcons">
          <ul className="subMenu--linksWrapper">
            {mainMenu.map((menu) => {
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
          <hr className="subMenu--underline" style="bottom: -6.5px;"/>
        </div>
        <div
          className="subMenu--profileInfo"
          onClick={() => props.setPage(7)}
          key={7}>
          <img src="/images/dp.png" className="subMenu--profileInfo--img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Submenu;
