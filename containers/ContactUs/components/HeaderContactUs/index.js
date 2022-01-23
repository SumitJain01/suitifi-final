import React from 'react';
import H1 from 'shared/components/Html/H1';
import Unpad from 'shared/components/Unpad';
import styled from 'styled-components';
import theme from 'theme/index';

function HeaderContactUs(props) {
  const { mainHeading, subHeading, className } = props;

  return (
    <Unpad className={className}>
      <header >
        <H1 style={{color: '#8A8C8B',fontWeight:'300'}}>{mainHeading}</H1>
      </header>
    </Unpad>
  );
}

export default styled(HeaderContactUs)`
  header {
    background-color: #DEF5F4;
    text-align: center;
    padding-bottom: 1rem;
    margin-bottom: 5px;
    padding-top: 10px;
    font-family: ${theme.fonts.primary};
    font-size: 0.5rem;
    font-weight: 300;
  }
  h1 {
    font-size: 3rem;
    color: #fff;
  }
  a {
    color: #fff;
    margin-right: 5px;
  }
  span {
    margin-left: 5px;
  }
  @media (max-width: 1024px){
    header {
      padding: 5px 0;
    }
    h1 {
      font-size: 2rem;
      margin: 5px 0;
    }
  }
`;
