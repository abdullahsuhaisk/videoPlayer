import React from "react";
import Gallery from "react-image-gallery";
import "../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

const ImageGallery = props => {
  const { top, left, width, height, images } = props;
  console.log(images);
  const style = {
    position: "absolute",
    width: `${width}`,
    height: `${height}`,
    top: `${top}`,
    left: `${left}`
  };

  return (
    <div style={style}>
      <Gallery items={images} />
    </div>
  );
};

export default ImageGallery;
