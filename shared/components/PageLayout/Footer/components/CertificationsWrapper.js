import React from 'react';
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import Image from 'shared/components/Image';
import ColoredLine from 'shared/components/ColoredLine';
import CenteredColumn from '../styled/CenteredColumn';
import config from 'config/env';

function CertificationsWrapper({ className }) {
  return (
    <Flex justify="center" className={`${className} certifications-wrapper`} style={{width:"100%"}}>
      <ColoredLine hideDesktop />
      <CertificationContainer>
        <CenteredColumn className="certification">
          <Image src={`https://honasa-tdc-static-staging.imgix.net/static/DYE-Free.png?auto=compress&fm=webp`} alt="" />
          <span>
            Dye Free
          </span>
        </CenteredColumn>
        <CenteredColumn className="certification">
          <Image src={`https://honasa-tdc-static-staging.imgix.net/static/Mineral-Oil-Free.png?auto=compress&fm=webp`} alt="" />
          <span>
            Mineral Oil Free
          </span>
        </CenteredColumn>
        <CenteredColumn className="certification">
          <Image src={`https://honasa-tdc-static-staging.imgix.net/static/Paraben-Free.png?auto=compress&fm=webp`} alt="" />
          <span>
            Paraben Free
          </span>
        </CenteredColumn>
        <CenteredColumn className="certification">
          <Image src={`https://honasa-tdc-static-staging.imgix.net/static/Sulfate-Free.png?auto=compress&fm=webp`} alt="" />
          <span>
            Sulfate Free
          </span>
        </CenteredColumn>
      </CertificationContainer>
      <ColoredLine hideDesktop />
    </Flex>
  );
}

const CertificationContainer = styled.div.attrs({
  className: 'certifications-container',
})`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    text-align: center;
  }
`;

export default styled(CertificationsWrapper)`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.mediumGray};
  order: -1;

  ${CenteredColumn} span {
    white-space: nowrap;
    font-size: 0.7rem;
  }

  ${CenteredColumn} img {
    width: 60px;
    min-width: 45px;
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 320px) {
    ${CenteredColumn} span {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 768px) { 
    margin-top: 1rem;
    margin-bottom: 0;
    justify-content: space-evenly;
    order: revert;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 0;
    padding: 1rem;
    flex: 1;

    ${CenteredColumn} img {
      width: 80px;
    }
    
    .force-break {
      display: none;
    }
  }

  @media only screen and (min-width: 1400px) {
    ${CenteredColumn} img {
      width: 60px;
    }
  }
`;
