import React from 'react';
import styled from 'styled-components';
import { MamacashWalletIcon, GreenCash } from 'shared/components/SVGIcons';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import { isNumber } from 'ramda-adjunct';
import { BRAND_NAME } from 'utils/constants';

function TotalMamacash({ amount, hasHistory, className }) {
  const eligible = isNumber(amount) ? amount : 0;
  const amountWithCurrency = makeLocaleStringWithCurrency()(Number(amount));
  
  return (<div className={className}>
    <MoneyIconsContainer className="left">
      <GreenCash />
      <GreenCash />
      <GreenCash />
    </MoneyIconsContainer>
    
    <div className="content-wrapper">
      <span className="title">Total Available {BRAND_NAME} Cash</span>
      
      <div className="amount-row">
        <MamacashWalletIcon />
        <strong className="mamacash-amount">
          {amountWithCurrency}
        </strong>
      </div>
      
      <span className="subtitle mamacash">
        Cashback will be credited in the {BRAND_NAME}pay wallet account within 7 days of all products being delivered for eligible orders.
        {/* Its Showing there is no purchase from us */}
      </span>
      
      {(hasHistory) && (
        <span className="subtitle">
          70% of {eligible} upto 1000 is Eligible
        </span>
      )}
    </div>
    
    <MoneyIconsContainer className="right">
      <GreenCash />
      <GreenCash />
      <GreenCash />
      <GreenCash />
    </MoneyIconsContainer>
  </div>);
}

const MoneyIconsContainer = styled.div`
  color: #92c935;
  font-size: 2.5rem;
  position: relative;
  
  svg {
    position: absolute;
  }
  
  &.left {
    svg:nth-child(1) {
      transform: translate(-130%,0%);
    }
    svg:nth-child(2) {
      transform: translate(-210%,90%) rotate(-95deg);
    }
    svg:nth-child(3) {
      transform: translate(-90%,125%) rotate(-40deg);
    }
  }
  
  &.right {
    svg:nth-child(1) {
      transform: translate(30%,0%) rotate(0deg);
    }
    svg:nth-child(2) {
      transform: translate(-25%,100%) rotate(-110deg);
    }
    svg:nth-child(3) {
      transform: translate(165%,20%) rotate(65deg);
    }
    svg:nth-child(4) {
      transform: translate(90%,120%) rotate(-15deg);
    }
  }
`;

export default styled(TotalMamacash)`
  padding: 1rem 0px 1.25rem;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  .content-wrapper {
    max-width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    color: ${({ theme }) => theme.general.themeFontBlack};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8em;
  }
  
  .amount-row {
    margin: 1rem 0;
    display: flex;
    align-items: center;
  }
  
  .amount-row svg {
    font-size: 3rem;
    color: ${props => props.theme.general.primaryColor};
  }
  
  .mamacash-amount {
    margin-left: 1em;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 0.9em;
    color: ${({ theme }) => theme.general.primaryColor};
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4em;
    
    &.mamacash {
      margin: 0 0 1rem;
      text-align: center;
      color: ${({ theme }) => theme.general.primaryColor};
    }
  }
`;
