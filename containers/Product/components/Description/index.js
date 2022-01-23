import React from 'react';
import styled from 'styled-components';

function Description({ html, className = '' }) {
  return (
    <div
      className={className}
      style={{ fontSize: '1rem'}}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default styled(Description)`
  text-align: justify;
  div {
      margin-bottom:16px !important;
  }
 p {
    display: block;
    line-height:1.5rem;
    margin-top: 1rem;
    font-weight: 400;
    font-family: 'Roboto';
    padding: 0 0.5rem;
  }
`;
