/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './slider.scss';

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
        right: '-100px',
        top: '30px',
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
        transform: 'scaleX(-1)',
        right: '-100px',
        top: '130px',
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div style={{ pointerEvents: 'auto', width: '800px', height: '400px' }}>
      <Slider {...settings}>
        <div>
          <h3 style={{ height: '300px' }}>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3 style={{ height: '300px' }}>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <div style={{ height: '300px', background: 'red' }}>3</div>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
