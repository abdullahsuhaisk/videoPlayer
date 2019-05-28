/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './slider.scss';
import WidgetsRenderer from '../../screens/WidgetsRenderer';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  'pointer-events': 'auto'
}));

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

const SliderComponent = (props) => {
  const {
    styles,
    slides,
    useDots,
    isInfinite,
    speed,
    slidesToShow,
    slidesToScroll
  } = props;

  const settings = {
    dots: !!useDots,
    infinite: !!isInfinite,
    speed: speed || 500,
    slidesToShow: slidesToShow || 5,
    slidesToScroll: slidesToScroll || 1,
    adaptiveHeight: false,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <StyledWrapper styles={styles}>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <WidgetsRenderer widgets={slide.children} />
            </div>
          );
        })}
      </Slider>
    </StyledWrapper>
  );
};

export default SliderComponent;
