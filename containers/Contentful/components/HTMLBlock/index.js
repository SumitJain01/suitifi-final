import React from 'react';
import styled from 'styled-components';

export default function HTMLBlock({ html }) {
  return <Div dangerouslySetInnerHTML={{ __html: html }} />;
}

const Div = styled.div`
  .woodmart-title-container {
    font-size: 1rem;
  }
  .list-content::before {
    content: '✔';
    display: inline-block;
    margin-right: 5px;
    font-size: 1.1rem;
  }
`;
