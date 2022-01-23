import React from 'react';
import Ratings from 'shared/components/Ratings';
import styled from 'styled-components';

function ReviewItem({
  className,
  item: {
    nickname,
    created_at,
    detail,
    rating_votes,
    // title,
  },
}) {
 
  return (
    <div className={className}>
      <div className="ReviewItem_header" style={{marginLeft:"5px",paddingBottom:"5px"}}>
        <div>
        <span className="ReviewItem_header_name" style={{marginRight:"5px"}}>{nickname}</span>
        {rating_votes && rating_votes[0] && rating_votes[0].ratingValue && <Ratings
          avg_rating_percent={Number(rating_votes[0].ratingPercent)}
        />
        }
          {/* - */}
          {/* <span className="ReviewItem_header_date">{new Date(created_at).toDateString()}</span> */}
        </div>
        
      </div>
      <div className="ReviewItem_content" style={{marginLeft:"5px",paddingBottom:"5px"}}>
        {/* <h4>{title}</h4> */}
        {detail}
      </div>
    </div>
  );
}

export default styled(ReviewItem)`
 .ReviewItem_content{
  @media only screen and (max-width: 700px){
    margin-left:0px;
    }
 }
  margin-bottom: 1rem;
  padding: 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  .ReviewItem {
    &_header {
      display: block;

      &_name {
        font-weight: 600;
        padding-right: 4px;

        &:before {
          color: #4caf50;
          font-family: "woodmart-font";
          margin: 5px;
          display: inline-flex;
          vertical-align: middle;
        }
      }

      &_date {
        padding-left: 4px;
        font-size: 0.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.darkGray};
      }
    }

    &_content {
      h4 {
        font-size: 15px;
      }
      font-size: 14px;
    }
  }
`;

