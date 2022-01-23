import React from 'react';
import { isNonEmptyArray } from 'ramda-adjunct';
import SlickSlider from 'shared/components/SlickSlider/Slick';
import Icon from 'react-icons-kit';
import { arrowLeft, arrowRight } from 'shared/components/Icons';
import FeedbackCard from './FeedbackCard';
import { defaultFeedbackList } from 'utils/constants'


export default function CustomerFeedback(props) {
  const feedbackList = props.feedbackList || defaultFeedbackList;
  if (isNonEmptyArray(feedbackList)) {
    if (props.noOfFeedbackToShow) {
      settings.slidesToScroll = props.noOfFeedbackToShow;
      settings.slidesToShow = props.noOfFeedbackToShow;
      settings.responsive[0].settings.slidesToScroll = props.noOfFeedbackToShow;
      settings.responsive[0].settings.slidesToShow = props.noOfFeedbackToShow;
      settings.responsive[1].settings.slidesToScroll = props.noOfFeedbackToShow;
      settings.responsive[1].settings.slidesToShow = props.noOfFeedbackToShow;
    }
    return (
      <SlickSlider
        settings={settings}
        items={feedbackList}
        itemRenderer={item => <FeedbackCard {...item} />}
      />
    );
  }
  return null;
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      role="presentation"
      className={className}
      style={{ ...style, display: 'block', color: '#222' }}
      onClick={onClick}
    >
      <Icon icon={arrowRight} size={20} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      role="presentation"
      className={className}
      style={{ ...style, display: 'block', color: '#222' }}
      onClick={onClick}
    >
      <Icon icon={arrowLeft} size={20} />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoPlaySpeed: 2500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
