import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './VideoPauseMenu.style';
import Overlay from './Components/Overlay/Overlay';
import Header from './Components/Header/Header';
import Submenu from './Components/Submenu/Submenu';
import ProductCards from './Components/Cards/ProductCard';
import dp from '../VideoPause/assets/dp.png';
import fav from '../VideoPause/assets/fav.png';
import like from '../VideoPause/assets/like.png';
import share from '../VideoPause/assets/share.png';
import cardimg from '../VideoPause/assets/cardimg.png';

const VideoPauseMenu = (props) => {
  return (
    <React.Fragment>
      <StyledComponent theme="dark">
        <Overlay />

        <div className="mainMenu--content">
          <Header profileImage={dp} />

          <Submenu
            statsData={[
              {
                imgUrl: like,
                numbers: 213
              },
              {
                imgUrl: fav,
                numbers: 213
              },
              {
                imgUrl: share,
                numbers: 213
              }
            ]}
          />

          <ProductCards
            cardImg={cardimg}
            productData={[
              {
                imgUrl: cardimg,
                name: 'Pierre Cardin Women Red Glasses',
                price: '71 $',
                discount: '50%',
                oldPrice: '149.50',
                stock: 'in stock'
              }
            ]}
          />
        </div>
      </StyledComponent>
    </React.Fragment>
  );
};

export default VideoPauseMenu;

VideoPauseMenu.propTypes = {
  campaignInfo: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      name: PropTypes.string
    })
  )
};
