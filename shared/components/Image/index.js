import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Image = ({
  className, ...imageProps
}) => (
  <LazyLoad once>
    <Img {...imageProps} className={className} />
  </LazyLoad>
);

export default Image;
