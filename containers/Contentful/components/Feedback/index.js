import React from 'react';
import H2 from 'shared/components/Html/H2';
import Feedback from 'containers/Home/components/Feedback/index';

const transformTestimonialItem = ({
  fields: {
    customerName, rating, review, image,
  },
}) => ({
  name: customerName,
  description: review,
  ratingCount: rating,
  imgSrc: image.fields.file.url,
});

export default ({ testimonialItems, title }) => {
  const feedbackList = testimonialItems.map(transformTestimonialItem);
  return (
    <div>
      {title && <H2 style={{ textAlign: 'center' }}>{title}</H2>}
      <Feedback feedbackList={feedbackList} />
    </div>
  );
};

