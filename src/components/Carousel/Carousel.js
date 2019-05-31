/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './carousel.scss';
import { Wrapper } from './Carousel.style';

const NextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`vibuy--slider-next-arrow ${className}`}
      role="button"
      tabIndex="-1"
      style={{
        ...style
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`vibuy--slider-prev-arrow ${className}`}
      role="button"
      tabIndex="-1"
      style={{
        ...style
      }}
      onClick={onClick}
    />
  );
};

const Carousel = (props) => {
  const {
    styles,
    children,
    useDots,
    isInfinite,
    speed,
    slidesToShow,
    slidesToScroll
  } = props;

  const settings = React.useMemo(
    () => ({
      dots: !!useDots,
      infinite: !!isInfinite,
      speed: speed || 500,
      slidesToShow: slidesToShow || 4,
      slidesToScroll: slidesToScroll || 1,
      adaptiveHeight: false,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }),
    [useDots, isInfinite, speed, slidesToShow, slidesToScroll]
  );

  return (
    <Wrapper styles={styles}>
      <Slider {...settings}>{children}</Slider>
    </Wrapper>
  );
};

export default Carousel;
