import React from 'react';
import styled from 'styled-components';
import CenteredColumn from '../styled/CenteredColumn';
import Heading from '../styled/Heading';

function AppStoreLinks({
  className,
}) {
  return (
    <Wrapper className={className}>
      <Heading className='app-store-message for-desktop'>EXPERIENCE THE The Derma Co MOBILE APP</Heading>
      <h3 className='for-mobile'>Download The Derma Co App</h3>

      <div className='store-imgs'>
        <img src='https://mamaearthp.imgix.net/wysiwyg/google-play2x.png?auto=format' alt='' />
        <img src='https://mamaearthp.imgix.net/wysiwyg/app-stor2x.png?auto=format' alt='' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(CenteredColumn).attrs({
  className: 'app-store-links',
})`
  margin-top: 1rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    align-items: center;
  }
  @media only screen and (min-width: 1024px) {
    /* margin-top: 0; */
  }
  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
    margin: 0;
    padding: 1rem;
    flex: 1;
  }
  @media only screen and (min-width: 1400px) {
    padding-left: 3rem;
  }
`;

export default styled(AppStoreLinks)`
  h3 {
    font-weight: 400;
    font-size: 1.1rem;
  }

  .store-imgs {
    margin-top: 1rem;
    img {
      width: 118px;
    }
    img:nth-child(2) {
      margin-left: 1rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .app-store-message {
      text-transform: uppercase;
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    .store-imgs {
      margin-left: 2rem;
    }
  }

  @media only screen and (min-width: 1400px) {
    .app-store-message {
      text-align: left;
      line-height: 1.4em;
      white-space: nowrap;
    }
  }
`;
