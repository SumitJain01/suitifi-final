import React from 'react';
import Img from 'shared/components/Image';
import styled from 'styled-components';

export default function ResponsiveImageBanner({
    mobileUrl,
    desktopUrl,
    pageTitle,
}) {
    return (
        <Wrapper>
            <div id="desktop">
                <Img src={desktopUrl} alt={pageTitle} />
            </div>
            <div id="mobile">
                <Img src={mobileUrl} alt={pageTitle} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    #desktop {
        display: none;
    }
  }
  @media screen and (min-width: 769px) {
    #mobile {
        display: none;
    }
  }
`; 