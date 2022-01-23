import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

function MamacashHistoryItem({ isDebit, changedAbsoluteAmount, transactionDate, orderId, className }) {
  return (
    <div className={className}>
      <Header isDebit={isDebit} date={transactionDate} change={changedAbsoluteAmount} />

      <p className="order-info">
        Order ID : <span className="order-id">#{orderId || ''}</span>
      </p>
    </div>
  );
}

export default styled(MamacashHistoryItem)`
  font-family: Roboto, sans-serif;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem 0.5rem;

  border: 1px solid #dbdbdb;
  border-radius: 5px;

  .order-info,
  .explanantion {
    margin: 0px;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.45em;
    color: ${props => props.theme.colors.mediumGray};
  }

  .order-info {
    line-height: 1.5em;

    .order-id {
      color: ${props => props.theme.general.primaryColor};
    }
  }

  .explanantion {
    font-size: 0.8rem;
    margin-top: 0.25rem;
    margin-right: 4rem;
  }
`;
