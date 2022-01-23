import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

export default function ProductGallery({ images }) {
  const [imgArr, setImgArr] = useState([]);
  useEffect(() => {
    const image = new Image();
    // eslint-disable-next-line prefer-destructuring
    image.src = images?.[0]?.original;
    image.onload = () => {
      setImgArr(images);
    };
  }, []);
  return (
    <div>
      <ImageGallery
      key={imgArr.length}
      useBrowserFullscreen={false}
      showPlayButton={false}
      showBullets={false}
      items={images}
    />
    </div>
  );
}
