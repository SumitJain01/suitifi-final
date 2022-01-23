import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { chevronRight, chevronLeft } from 'shared/components/Icons';
import { HappyCustomersReviews } from 'utils/constants';
import { ReviewsBackground, NavigateRightIcon } from 'shared/components/SVGIcons';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      onClick={onClick}
    >
      <Icon icon={chevronRight} size="1.5rem" style={{ color: 'gray' }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Icon icon={chevronLeft} size="1.5rem" style={{ color: 'gray' }} />
    </div>
  );
}

function HappyCustomers({ className, isMobile, feedbackList = {}, isContentful }) {
  const reviews = (isContentful ? feedbackList : HappyCustomersReviews) || [];
  const settings = {
    dots: isMobile ? true : false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    nextArrow: !isMobile && <SampleNextArrow />,
    prevArrow: !isMobile && <SamplePrevArrow />,
    arrows: !isMobile ? true : false,
  }
  return (
    <div className={className}>
      <div className="review-slider-heading">
        <div className="heading">
          Happy Customers
        </div>
        {/* {isMobile && 
          <Link prefetch={false} href='/' passHref>
            <a className="view-all-btn">
              <span>View All</span>
              <NavigateRightIcon />
            </a>
          </Link>
        } */}
      </div>
      <div className="carousel">
        <span className="reviews-bg">
          <ReviewsBackground />
        </span>
        <Slider
          {...settings}
        >
          {
            reviews.map((review, index) => {
              return (
                <ReviewCard
                  key={index}
                  name={review.name}
                  review={review.review}
                  rating={review.rating}
                  img={review.image}
                  title={review.title}
                />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default styled(HappyCustomers)`
    display: flex;
    flex-direction: column;
    position: relative;

    .review-slider-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.8rem 1rem 1rem;
    }

    .view-all-btn {
      border-radius: 14px;
      border: 1px solid ${({ theme }) => theme.general.primaryColor};
      color: ${({ theme }) => theme.general.primaryColor};
      padding: 0.2rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 3px;
      }
    }

    .carousel {
      margin: 0 1rem;
    }

    .reviews-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 80%;
      z-index: -1;
      filter: blur(8px);
      -webkit-filter: blur(8px);
    }

    .heading {
      font-size: 1.7rem;
      line-height: 1;
      font-weight: 500;
      color: #1D1D1D;
      font-family: "Roboto";
      text-align: center;
    }

    @media only screen and (min-width: 768px) {
      .review-slider-heading {
        justify-content: center;
      }
    }
`;