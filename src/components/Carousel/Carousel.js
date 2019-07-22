/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './carousel.scss';
import { Wrapper } from './Carousel.style';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`vb--carousel-next-arrow ${className}`}
      role="button"
      tabIndex="-1"
      style={{
        ...style
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`vb--carousel-prev-arrow ${className}`}
      role="button"
      tabIndex="-1"
      style={{
        ...style
      }}
      onClick={onClick}
    />
  );
};

const Carousel = ({
  styles,
  children,
  useDots,
  isInfinite,
  speed,
  slidesToShow,
  slidesToScroll
}) => {
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
    <Wrapper styles={styles} className="vb--carousel">
      <Slider {...settings}>{children}</Slider>
    </Wrapper>
  );
};

Carousel.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any.isRequired,
  useDots: PropTypes.bool,
  isInfinite: PropTypes.bool,
  speed: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number
};

Carousel.defaultProps = {
  styles: {},
  useDots: false,
  isInfinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2
};

export default Carousel;
