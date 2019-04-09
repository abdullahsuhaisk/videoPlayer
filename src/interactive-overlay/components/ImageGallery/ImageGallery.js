import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const ImageGallery = (props) => {
  const {
    top,
    left,
    width,
    height,
    images,
    autoPlay,
    navigation,
    thumbnail
  } = props;
  const style = {
    position: 'absolute',
    width: `${width}`,
    height: `${height}`,
    top: `${top}`,
    left: `${left}`
  };

  return (
    <div style={style}>
      <Gallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={autoPlay}
        showNav={navigation}
        showThumbnails={thumbnail}
      />
    </div>
  );
};

export default ImageGallery;
