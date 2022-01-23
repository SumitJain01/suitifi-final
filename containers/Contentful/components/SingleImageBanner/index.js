import React from 'react';
import Img from 'shared/components/Image';

export default function SingleImageBanner({
  url,
  pageTitle,
}) {
  return (
    <div>
      <Img src={url} alt={pageTitle} />
    </div>
  );
}
