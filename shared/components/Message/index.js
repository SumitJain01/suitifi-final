import React from 'react';
import styled from 'styled-components';

function Message({ children, ...restProps }) {
  return (
    <div {...restProps}>
      {children}
    </div>
  );
}

export default styled(Message)`
  display: block;
  margin: 6px 0;
  padding: 5px 6px;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.scheme.accent};
  color: #fff;
`;
