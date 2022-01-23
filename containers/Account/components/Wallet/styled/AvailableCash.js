import React from 'react';
import styled from 'styled-components';
import { WalletIcon } from 'shared/components/SVGIcons';
import { BRAND_NAME } from 'utils/constants';

function AvailableCash({
  creditBalance,
  className,
}) {
  return (
    <div className={className}>
      <i className="mama-wallet-icon">
        <WalletIcon />
      </i>
      <p className="info">Available {BRAND_NAME} Cash</p>
      <p className="amount">{`₹ ${(creditBalance && creditBalance.toFixed(2)) || '00.00'}`}</p>
    </div>
  );
}

export default styled(AvailableCash)`
  margin: 0.75rem 0.75rem 0;
  padding: 0.75rem 0;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.general.themeLightGreen};

  p {
    margin: 0;
  }
  p.info {
    flex-grow: 1;
    margin-left: 0.5rem;
    font-size: 0.975rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: left;
    color: ${props => props.theme.general.themeFontBlack};
  }
  p.amount {
    color: ${props => props.theme.general.primaryColor};
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 0.75em;
  }

  i.mama-wallet-icon {
    margin-left: 0.5rem;
    
    svg {
      height: 0.9rem;
      vertical-align: baseline;
      
      .path-selector {
        fill: ${props => props.theme.general.primaryColor};
      }
    }
  }
`;

