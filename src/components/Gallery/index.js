import React from "react";
import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const items = images.map((i) => ({
    original: i.default,
    thumbnail: i.default,
  }));
  return (
    <ImageGallery
      items={items}
      showNav={false}
      showPlayButton={false}
      lazyLoad={true}
      thumbnailPosition={isMobile ? "bottom" : "right"}
    />
  );
};

export default Gallery;
