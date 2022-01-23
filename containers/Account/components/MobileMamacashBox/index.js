import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { WalletIcon } from 'shared/components/SVGIcons';
import { makeLocaleStringWithCurrency } from 'utils/helpers/products/prices';
import NavigateNext from '../styled/NavigateNext';
import { BRAND_NAME } from 'utils/constants';

function MobileCashBox({ mamacashAmount, className }) {
  return (
    <Link prefetch={false} href="/my-account/wallet" passHref>
      <Wrapper className={className || ''}>
        <i className="mama-wallet-icon">
          <WalletIcon />
        </i>
        <p className="info">{BRAND_NAME} Cash <strong className="amount">{makeLocaleStringWithCurrency()(mamacashAmount)}</strong></p>
        <NavigateNext />
      </Wrapper>
    </Link>
  );
}


const Wrapper = styled.a`
  font-family: Roboto, sans-serif;

  margin: 0.75rem 0 0;
  padding: 0.75rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.general.themeFontBlack};
  
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  
  p {
    flex-grow: 1;
    margin: 0;
    margin-left: 0.5rem;
    font-size: 0.975rem;
    font-weight: 500;
    line-height: 1.3rem;
    text-align: left;
    
    .amount {
      margin-left: 1.25rem;
      color: ${props => props.theme.general.primaryColor};
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  
  i.mama-wallet-icon {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    
    svg {
      height: 0.9rem;
      vertical-align: baseline;
      
      .path-selector {
        fill: ${props => props.theme.general.primaryColor};
      }
    }
  }
`;

export default styled(MobileCashBox)``;
