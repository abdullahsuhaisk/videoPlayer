import React from 'react';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import NoImage from '../../../../assets/images/NoImage.png';
import NextIcon from '../../../../assets/icons/NextIcon.svg';
import PreviousIcon from '../../../../assets/icons/PreviousIcon.svg';
// import FlickityComponent from '../../../../components/Flickity/FlickityComponent';

const ProductDetailImage = ({ images, client }) => {
  // const flickityOptions = {
  //   cellAlign: 'center',
  //   contain: true,
  //   pageDots: false,
  //   prevNextButtons: true,
  //   wrapAround: true,
  //   selectedAttraction: 0.1,
  //   friction: 0.8
  // };
  // const FlickityClassName = 'ProductDetail--imagesSlider';

  const NextArrow = (a) => {
    const { className, onClick } = a;

    return (
      <div className={className} onClick={onClick}>
        <img alt="" src={NextIcon} />
      </div>
    );
  };

  const PrevArrow = (a) => {
    const { className, onClick } = a;

    return (
      <div className={className} onClick={onClick}>
        <img alt="" src={PreviousIcon} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const GET_LAYOUT = gql`
    query getLayoutForScaler {
      layout @client {
        width
      }
    }
  `;

  return (
    // <div>
    //   <FlickityComponent
    //     FlickityClassName={FlickityClassName}
    //     flickityOptions={flickityOptions}
    //     images={images}
    //     key={images[0].id}
    //   />
    // </div>
    <div>
      <div className="ProductDetail--imagesSlider">
        {images && images.length > 0 ? (
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="slick--image-container">
                <Query query={GET_LAYOUT}>
                  {({ data: { layout } }) => {
                    if (layout.width <= 850) {
                      return <img alt={item.name} src={item.thumbnailUrl} />;
                    }
                    return <img alt={item.name} src={item.imageUrl} />;
                  }}
                </Query>
              </div>
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            <div className="slick--image-container">
              <img alt="No" src={NoImage} />
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ProductDetailImage;
