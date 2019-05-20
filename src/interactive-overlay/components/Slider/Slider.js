/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './slider.scss';
import ProductCard from '../ProductCard/ProductCard';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      role="button"
      tabIndex="-1"
      style={{
        ...style,
        display: 'block',
        background: 'url("/images/sign-right.svg") no-repeat center /contain',
        opacity: '0.4',
        right: '-100px',
        top: '80px',
        zIndex: 1,
        width: '90px',
        height: '90px'
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      role="button"
      tabIndex="-1"
      style={{
        ...style,
        display: 'block',
        background: 'url("/images/sign-right.svg") no-repeat center /contain',
        opacity: '0.4',
        transform: 'scaleX(-1)',
        right: '-100px',
        top: '180px',
        zIndex: 1,
        width: '90px',
        height: '90px'
      }}
      onClick={onClick}
    />
  );
};

const SliderComponent = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div style={{ pointerEvents: 'auto', width: '800px', height: '400px' }}>
      <Slider {...settings}>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div style={{ margin: 'auto' }}>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
        <div>
          <ProductCard
            basePrice="1149.95$"
            discountRate="20%"
            currentPrice="774.98$"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
