import React from 'react';
import styled from 'styled-components';

function Header({ isDebit, date, change, className }) {
  return (
    <div className={`${className} ${isDebit ? 'debit' : 'credit'}`}>
      <span className="type">{isDebit ? 'Debited ' : 'Credited '}On :</span>
      <span className="date">{date}</span>
      {(change) ? (
        <span className="amount">
          {isDebit ? '- ' : '+ '}₹ {change}
        </span>
      ) : (null)}
    </div>
  );
}

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .type {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.75;
  }
  .date {
    margin-left: 0.25rem;
    margin-right: auto;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 2;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.mediumGray};
  }
  .amount {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 0.85;
  }

  &.credit .type,
  &.credit .amount {
    color: ${({ theme }) => theme.general.primaryColor};
  }
  &.debit .type,
  &.debit .amount {
    color: #ff0000;
  }
`;
