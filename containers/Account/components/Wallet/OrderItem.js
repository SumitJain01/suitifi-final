import React from 'react';
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import Message from 'shared/components/Message';
import PropTypes from 'prop-types';

export default function OrderItem({ data }) {
  const {
    action,
    balance_change,
    balance_amount,
    updated_at,
    additional_info,
  } = data;

  return (
    <Wrapper key={updated_at}>
      <Flex justify="space-between">
        <div>
          <span className="id">Balance: {balance_amount}</span>
          <span className="info">{action}: <span className="currency">{balance_change}</span></span>
        </div>
        <div>
          {/* <div>
            {new Date(updated_at).toDateString()}
          </div> */}
        </div>
      </Flex>
      <Message>{additional_info}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px 16px;
  padding-bottom: 0;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.general.lightBg};
  .id {
    margin-bottom: 12px;
    display: block;
  }
  .info { 
    display: block;
  }
  .currency {
    font-size: 12px;
  }
`;

OrderItem.propTypes = {
  data: PropTypes.object,
};

OrderItem.defaultProps = {
  data: {}
};

