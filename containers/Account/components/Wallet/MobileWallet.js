import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import MamacashHistoryItem from './MamacashHistoryItem/Mobile';
import AvailableCashRow from './styled/AvailableCash';
import Button from './styled/Button';
import { BRAND_NAME } from 'utils/constants';

function MobileWallet({ creditBalance, renderedHistory, currentPage, next, isMoreAvailable, hasHistory, className }) {
  return (
    <Wrapper className={className || ''}>
      <AvailableCashRow creditBalance={creditBalance} />
      <Message>
        Cashback will be credited in the {BRAND_NAME}pay wallet account within 
        7 days of all products being delivered for eligible orders.
      </Message>
      
      <hr className="separator" />

      {Boolean(hasHistory)
        ? (
          <div className="history-items-wrapper">
            <p className="title">Cashback History</p>

            {renderedHistory}
            
            {(isMoreAvailable) && (
              <a className="show-more-btn" href={`#cashback-page-${currentPage}`} onClick={next}>Show More</a>
            )}
          </div>
        )
        : (
          <Fragment>
            <NoHistory>Its Showing there is no purchase from us</NoHistory>
            <Link prefetch={false} href="/products" passHref>
              <Button>shop now</Button>
            </Link>
          </Fragment>
        )
      }
    </Wrapper>
  );
}

const Message = styled.div`
  margin: 0.75rem 0.75rem 0;
  font-size: 0.95rem;
  color: ${props => props.theme.general.primaryColor};
`;

const NoHistory = styled.p`
  font-size: 1.025rem;
  font-weight: 400;
  line-height: 1.4em;
  text-align: center;
  color: ${({ theme }) => theme.colors.mediumGray};
`;

const fadeOut = keyframes`
  from {
    background-color: ${props => props.theme.colors.silver};
  }

  to {
    background-color: transparent;
  }
`;

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  
  .current-page ${MamacashHistoryItem} {
    animation: ${fadeOut} 3s linear;
  }

  .history-items-wrapper {
    margin: 0 0.75rem;
  }

  hr.separator {
    margin: 1rem 0 0.8rem;
    border: 0px;
    border-bottom: 1px solid ${props => props.theme.colors.smoke};
  }

  p.title {
    margin: 0px;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.5em;
    color: ${({ theme }) => theme.colors.mediumGray};
  }
  
  .show-more-btn {
    margin: 1.5rem auto 0px;
    padding: 0px;
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4em;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.general.primaryColor};
  }
`;

export default MobileWallet;
