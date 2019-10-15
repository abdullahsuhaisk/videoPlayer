import React from 'react';
import Slider from 'react-slick';
import NoImage from '../../../../assets/images/NoImage.svg';
// import FlickityComponent from '../../../../components/Flickity/FlickityComponent';

const ProductDetailImage = ({ images }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    // <div>
    //   <FlickityComponent
    //     FlickityClassName={FlickityClassName}
    //     flickityOptions={flickityOptions}
    //     images={images}
    //     key={images[0].id}
    //   />
    // </div>

    <div className="ProductDetail--imagesSlider">
      {images && images.length > 0 ? (
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="slick--image-container">
              <img alt="" src={item.imageUrl} />
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
  );
};

export default ProductDetailImage;
