import React from 'react';
import { serviceFeatureData } from 'utils/constants';
import styled from 'styled-components';

function ServiceFeatures({ className, isPhonePe }) {
  return (
    <div className={`${className} service-features`}>
      {serviceFeatureData.map((item) => {
        if (isPhonePe && !item.displayInsidePhonePe) {
          return null;
        }
        return (
          <Feature className="feature" key={item.title}>
            <IconContainer className="icon-container">
              <img
                src={item.mobileImg}
                srcSet={`${item.mobileImg} ${item.mobileNaturalWidth},
                      ${item.desktopImg} ${item.desktopNaturalWidth}`}
                sizes={`(max-width: 767px) ${item.mobileWidth}, ${item.desktopWidth}`}
                loading="lazy"
                alt=""
                width="38px"
                height="38px"

              />
            </IconContainer>

            <InfoContainer className="info-container">
              <h3 className="heading">{item.title}</h3>
              <p className="mobile-subtitle">{item.mobileSubtitle}</p>
              <p className="desktop-subtitle">{item.desktopSubtitle}</p>
            </InfoContainer>
          </Feature>
        )
      })
      }
    </div>
  );
}

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 360px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 411px) {
    padding-left: 1rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid ${props => props.theme.colors.smoke};
    }
  }

  @media only screen and (min-width: 1024px) {
    &:nth-child(n+3) {
      display: none;
    }
  }
`;

const InfoContainer = styled.div`
  margin-top: 0.5rem;
  text-align: center;

  h3 {
    font-family: Roboto;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.4em;
  }
  p {
    color: #838383;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.4em;
    white-space: nowrap;
    margin: 0;

    &.desktop-subtitle {
      display: none;
    }
  }

  @media only screen and (min-width: 360px) {
    margin-top: 0;
    margin-left: 0.5rem;
    text-align: revert;
  }

  @media only screen and (min-width: 375px) {
    h3 {
      font-size: 0.9rem;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-left: 0px;

    h3 {
      color: #3d3d3d;
      font-weight: 700;
    }

    p {
      margin-top: 0.5rem;

      &.mobile-subtitle {
        display: none;
      }
      &.desktop-subtitle {
       display: revert;
      }
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.silver};
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    width: unset;
    height: unset;
    border: 0px;
  }
`;

export default styled(ServiceFeatures)`
  background-color: #f8f8f8;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: 360px) {
    grid-template-columns: ${(props) => props.isPhonePe ? 'auto' : '1fr 1fr'};
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    background-color: unset;
    padding: 0 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: revert;
    align-items: stretch;
  }

  @media only screen and (min-width: 1024px) {
    flex: 1;
    grid-template-columns: repeat(2, 1fr);
  }
`;

