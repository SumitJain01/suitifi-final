/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import VisibilitySensor from 'hoc/VisibilitySensor';
const dpr = process.browser ? window.devicePixelRatio : 1;

export function makeImgixParams({
  width,
}) {
  return `?auto=compress&fm=webp&q=10&fit=scale&w=${width * dpr * 0.8}`;
}

export function makeImgixParamsMobileBanner({
  width,
}) {
  return `?fit=scale&w=400&h=200&fm=webp`;
}

export function makeImgixParamsMobile({
  width,
}) {
  return `?fm=webp&q=10&fit=scale&w=365&h=195`;
}

function ImgixComponent({
  isVisible,
  src,
  srcSet,
  sizes,
  placeholder = 'https://placehold.jp/38/ffffff/41a8dd/600x600.png',
  style,
  isActive,
  ...restProps
}) {
  const sourceProp = { srcSet } || { src };
  return (
    <figure style={{ position: 'relative' }}>
      <img src={placeholder} alt="" />
      {(isVisible || !isActive) && <img
        alt=""
        style={style}
        sizes={sizes}
        {...sourceProp}
        {...restProps}
      />
      }
    </figure>
  );
}

export default ({ once = false, ...props }) => (
  <VisibilitySensor once={once}>
    <ImgixComponent {...props} />
  </VisibilitySensor>
);
