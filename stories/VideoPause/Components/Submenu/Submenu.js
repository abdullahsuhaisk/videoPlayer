import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent, Link } from '../../VideoPauseMenu.style';

const Submenu = (props) => {
  const { statsData } = props;
  return (
    <React.Fragment>
      <StyledComponent>
        <div className="mainMenu--productsMenu">
          <div className="products">
            <Link href="#">Products in this Scene</Link>
            <Link href="#" active>
              All Products
            </Link>
            <Link href="#">Suggested Products</Link>
          </div>
          <div className="stats">
            {statsData.map((item) => {
              return (
                <div>
                  <img src={item.imgUrl} />
                  <p>{item.numbers}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mainMenu--borderline"></div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default Submenu;
