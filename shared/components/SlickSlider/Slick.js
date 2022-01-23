import React from 'react';
import { identity } from 'ramda';
import { isFunction } from 'ramda-adjunct';
import Slider from 'react-slick';

export default function Slick({
  settings,
  itemRenderer,
  items,
}) {
  return (
<div style={{ maxWidth: '100vw' }}>
      <Slider {...settings}>
        {items.map(isFunction(itemRenderer) ? itemRenderer : identity)}
      </Slider>
      </div>
  );
}




