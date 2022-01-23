import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Flex from 'shared/components/Flex';
import Icons from 'react-icons-kit';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { darken } from 'polished';
import Ul from 'shared/components/Html/Ul';
import Li from 'shared/components/Html/Li';
import ColoredLine from 'shared/components/ColoredLine';
import { FAHeart } from 'shared/components/Icons';
import Image from 'shared/components/Image';
import ContactUs from './components/ContactUs';
import CertificationsWrapper from './components/CertificationsWrapper';
import PaymentOptions from './components/PaymentOptions';
import ServiceFeatures from './components/ServiceFeatures';
import SocialIcons from './components/SocialIcons';
import Heading from './styled/Heading';
import { useRouter } from 'next/router';
import { footerLinks } from 'utils/constants';

function Footer({ isPhonePe, showLoginPopUp, isLoggedIn }) {
  const router = useRouter();
  let pathname = router.pathname;
  let isPDP = pathname == "/product";
  const today=new Date();
  return (
    <FooterCont  isPDP={isPDP}>
      <Grid fluid className="content-wrapper">
      <div className="features-contact-us-container">
          <ServiceFeatures isPhonePe={isPhonePe} />
          <ContactUs />
        </div>
        <Flex flexDir="column" className="payment-certifications-container">
          <PaymentOptions isPhonePe={isPhonePe} />
        </Flex>
        <ColoredLine hideDesktop />
        <div className="Footer__nav">
          <Flex justify="space-between" className="links-container">
            <LinksColumn heading="USEFUL LINKS" links={footerLinks.usefulLinks} />
            <LinksColumn heading="CATEGORIES" links={footerLinks.catagoriesLinks} />
            <LinksColumn heading="MY ACCOUNT" links={footerLinks.accountLinks} showLoginPopUp={showLoginPopUp} isLoggedIn={isLoggedIn} />
          </Flex>
        </div>
        <Row className="copyrightSocialContainer">
          <Col xs={12} className="social-container">
            <Heading className="heading">
              SHOW US SOME <Icons className="heart-icon" icon={FAHeart} size="1.5rem" /> ON SOCIAL MEDIA
            </Heading>
            
            <SocialIcons />
          </Col>

          {/* Mobile Policy Links */}
          <Col xs={12} sm={false} className="mobile-policy-links">
            <Link prefetch={false} href="/privacy-policy">
              <a style={{color:"#279989"}}>PRIVACY POLICY</a>
            </Link>

            <div className="separator" style={{color:"#279989"}}>|</div>

            <Link prefetch={false} href="/return-policy">
              <a style={{color:"#279989"}}>RETURN POLICY</a>
            </Link>
          </Col>

          <Col xs={false} sm={12} className="copyright-container">
            <span>© {today.getFullYear()} Honasa Consumer Pvt. Ltd. All Rights Reserved</span>
          </Col>
        </Row>
      </Grid>
    </FooterCont>
  );
}

const FooterCont = styled.div`

  font-family: Roboto, sans-serif;
  color: ${props => props.theme.general.themeFontBlack};
  padding-top: 1rem;

  .Footer__nav,
  .Footer__nav .links-container img {
    display: none;
  }

  .copyrightSocialContainer {
    align-items: center;
    .copyrightContianer {
      font-size: 0.8rem;
    }

    .social-container {
      padding-top: 1rem;
      ${Heading} {
        display: none;
      }
    }
  }

  .mobile-policy-links {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${props => props.isPDP && css`margin-bottom: 3rem;`}

    a {
      letter-spacing: 0.25px;
    }

    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .mobile-policy-links a,
  .mobile-policy-links .separator,
  .copyright-container {
    color: ${props => props.theme.colors.mediumGray};
  }

  .for-desktop {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    margin : 0rem 6rem;
    .for-mobile {
      display: none;
    }
    .for-desktop {
      display: initial;
    }

    .content-wrapper {
      border-top: 1px solid ${props => props.theme.colors.smoke};
    }

    .showMobileTopbar {
      display: none;
    }

    .payment-certifications-container {
      border-top: 1px solid ${props => props.theme.colors.smoke};
    }

    .Footer__nav {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      padding: 1rem 4rem 1rem;
      border-top: 1px solid ${props => props.theme.colors.smoke};

      .links-container {
        flex: 1 0 auto;
      }
      li {
        margin-top: 15px;
      }

      .links-col a {
        color: ${props => props.theme.colors.mediumGray};
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.4em;
        :hover {
          color: ${props => props.theme.general.primaryColor};
        }
        :active {
          color: ${props => darken(0.15, props.theme.general.primaryColor)};
        }
      }
    }

    .copyrightSocialContainer {
      align-items: center;

      .social-container {
        text-align: center;
        padding: 1rem 0;
        border-top: 1px solid ${props => props.theme.colors.smoke};
        border-bottom: 1px solid ${props => props.theme.colors.smoke};

        ${Heading} {
          display: block;
        }
        i.heart-icon {
          color: ${props => props.theme.general.themeRed};
          vertical-align: text-bottom;
          margin: 0 0.25rem;
        }
      }

      .mobile-policy-links {
        display: none;
      }

      .copyright-container {
        text-align: center;
        padding: 1rem 0;
        font-weight: 400;
      }
    }

    .gap {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 1rem 1rem 1.5rem;

    .content-wrapper {
      border: 1px solid ${props => props.theme.colors.smoke};
    }

    .Footer__nav .links-container img {
      display: revert;
      width: 150px;
      height: 255px;
    }
    
    .features-contact-us-container {
      display: flex;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 1rem 1rem 1.5rem;
    .payment-certifications-container {
      flex-direction: row;
      padding: 0 4rem;
    }

    .Footer__nav {
      margin-top: 0;
    }

    .hide-desktop {
      display: none;
    }
  }
`;


const LinksColumn = ({ heading, links, showLoginPopUp, isLoggedIn }) => (
  <Flex flexDir="column" className="links-col">
    <Heading className="heading">{heading}</Heading>
    <Ul>
      {links.map(({ name, val }) => (
        <Li key={name}>
          {
            isLoggedIn ?
            <Link prefetch={false} href={val}>
              <a onClick={()=>{ showLoginPopUp() }}>{name}</a>
            </Link> : 
            <a onClick={()=>{ showLoginPopUp() }}>{name}</a>
          }

        </Li>
      ))}
    </Ul>
  </Flex>
);

export default styled(Footer)``;
