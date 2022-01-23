import React from 'react';
import Ratings from 'react-ratings-declarative';

export default function ProductRatings({
  rating, size = '10px', space = '3px', color = '#eabe12',
}) {
  return (
    <Ratings
      rating={rating}
      widgetDimensions={size}
      widgetSpacings={space}
      widgetRatedColors={color}
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
}
