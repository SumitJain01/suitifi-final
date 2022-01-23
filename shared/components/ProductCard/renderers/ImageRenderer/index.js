import React from 'react';
import Image from 'next/image';
import { getImgixImageFromMagentoUrl } from 'utils/productModule';
const placeholder = '/static/mamaearth/placeholder.png';
import styled from 'styled-components';

const dpr = process.browser ? window.devicePixelRatio : 1;

export function makeImgixParams({
  width,
}) {
  return `?auto=compress&fm=webp&fit=crop&w=${width * dpr * 0.8}`;
}

const Div = styled.div`
  z-index: 1;
  min-height: 250px;
  @media only screen and (max-width: 767px){
    min-height: calc(96vw/3 - 1rem - 10px);
  }
  @media only screen and (max-width: 600px){
    min-height: calc(96vw/2 - 1rem - 10px);
  }
`

export default function ImageRenderer({ images, className, isMobile }) {
  // const src = getImgixImageFromMagentoUrl(images[0]) || placeholder;
  const src = images || placeholder;
  const dimension = isMobile ? 150 : 270;
  return (
    <Div>
      <img
        placeholder={placeholder}
        className={className}
        src={`${src}?auto=compress&fm=webp&fit=scale&w=${dimension}&h=${dimension}`}
        width="100%"
        height="100%"
        quality={20}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          borderRadius:'5px',
        }}
        sizes="(min-width: 768px) 200w (min-width: 600px) 300w, 200w"
      />
    </Div>
  );
}