import React, { useState } from 'react';
import Image from 'shared/components/Image';
import styled from 'styled-components';
import { CorrectCheckmarkIcon, FiveStarIcon } from 'shared/components/SVGIcons';

const ReviewCard = ({ review, name, img, title, className, isMobile }) => {
  const [showExpandedReview, setShowExpandedReview] = useState(false); 
	const reviewLength = isMobile ? 120 : 100;

  return (
		<div className={className}>
      <div className="review-heading">
        <div className="review-img">
          <Image className="image" alt={name} src={img} />
        </div>
        <div className="info">
          <div className="verification">
            <i><CorrectCheckmarkIcon /></i>
            Verified Customer
          </div>
          <div className="name">{name}</div>
          <div className="rating">
            <FiveStarIcon />
          </div>
        </div>
      </div>
      <div className="title">{title}</div>
			<div className="review">
				{
					review.length > reviewLength 
					?
						<div>
              <span className="review-text">
                {review.slice(0, reviewLength)}
                {showExpandedReview
                  ?
                    <span className="review-more-text"> 
                      {review.slice(reviewLength, review.length)}
                    </span>
                  : '...'
                }
              </span>
              <button 
                className="review-read-more-btn" 
                onClick={() => setShowExpandedReview(!showExpandedReview)}
              >
                {showExpandedReview ? 'Read Less' : 'Read More'}
              </button>
						</div>
					: review
				}
			</div>
		</div>
	)
}

export default styled(ReviewCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border-radius: 10px;
  min-width: 250px;
  box-shadow: 0 0 14px #0000001A;
  padding: 1rem;
  text-align: center;
  background: #ffffff;

  .review-img {
    position: relative;
    z-index: 1;
  }

  .review-img::before {
    content: "";
    height: 50px;
    width: 50px;
    background: ${({theme}) => theme.general.secondaryColor};
    position: absolute;
    right: 40px;
    bottom: 40%;
    border-radius: 100%;
    z-index: -1;
  }

  .review-img::after {
    content: "";
    height: 50px;
    width: 50px;
    background: ${({theme}) => theme.general.secondaryColor};
    position: absolute;
    left: 45%;
    top: 40%;
    border-radius: 100%;
    z-index: -1;
  }

  .image {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    border: 2px solid ${({theme}) => theme.general.secondaryColor};
  }

  .review-heading {
    display: flex;
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
  }

  .verification {
    margin: 0.3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      display: flex;
      margin-right: 5px;
    }
  }

  .name {
    font-weight: 600;
    font-size: 18px;
    font-family: "Roboto";
  }

  .title {
    font-size: 15px;
    font-family: "Roboto";
    font-weight: 500;
    margin: 0.3rem 0 0.5rem;
  }

  .review-read-more-btn {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({theme}) => theme.general.primaryColor};
  }

  @media only screen and (min-width: 768px) {
    .review-heading {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .info {
      align-items: center;
      justify-content: center;
      margin: none;
    }
  }
`;