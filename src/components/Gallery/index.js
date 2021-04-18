import React from "react";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import "./style.scss";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../images/photos/",
    false,
    /\.(png|jpeg|jpg|jpe?g|svg|jpg)$/
  )
);

const Gallery = () => {
  const photos = images.map((i) => ({
    src: i.default,
  }));

  return (
    <Carousel
      className="gallery-photo"
      images={photos}
      hasLeftButton={false}
      hasRightButton={false}
      hasMediaButton={false}
      hasIndexBoard={false}
      hasSizeButton="bottomRight"
      objectFit="contain"
    />
  );
};

export default Gallery;
