import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { logoutRequest, showLoginPopUp } from 'containers/Auth/redux/actions';
import { makeSelectLoggedIn, makeSelectUser } from 'containers/Auth/redux/selectors';
import NoScroll from 'shared/components/ScrollLock';
import UserProfile from './UserProfile';
import NavItem from './components/NavItem';
import NavCategory from './components/NavCategory';
import MainText from '../../styled/MainText';
import NavigateNext from '../../styled/NavigateNext';
import { Section, StyledCategoryWrapper, HelpSection } from './NavStyles';
import getStaticLinksData from 'utils/constants/NavMobileConstants'
import {
  UserAccountIcon,
  MyAccountIcon,
  About,
  MobileLogoutIcon,
} from './SvgIcons';
import helpDeskHandler from 'utils/helpers/helpDeskHandler';

const Flex = styled.div`
  display: flex;
  align-items: center;
  
  .MobileNavCategory-sc-1qowze1-0 {
    display : inline-block;
    margin: 0rem;
    padding-left : 0.5rem;
  }

  .SubText-sc-8mwtwz-0 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4em;
    color: white;
  }
`;
class MobMenu extends Component {
  constructor(props) {
    super(props);

    this.data = getStaticLinksData();
  }

  render() {
    const { data } = this;
    const { asPath, clickHandler, menuOpen } = this.props;
    const { isLoggedIn, user, logout, showLoginPopUp, className, } = this.props;

    return (
      <Fragment>
        <div className={className}>
          {menuOpen && <NoScroll />} {/* Disable scrolling overlay background (body) */}

          <UserProfile
            isLoggedIn={isLoggedIn}
            name={`${user.firstName} ${user.lastName}`}
            email={user.email}
            phone={user.phone}
            close={clickHandler}
            showLoginPopUp={showLoginPopUp}
          />

          <Section>
            <Link prefetch={false} href={data.trackOrderCategory.val} passHref>
              <NavCategory
                data={data.trackOrderCategory}
                close={clickHandler}
                asLink
                className={`${asPath === data.trackOrderCategory.val ? 'isCurrent' : ''} track-order`}
              />
            </Link>
          </Section>

          <Section className="products-section">
            {data.productSections.map(category => (
              <ItemsCategoryRenderer key={category.name} data={category} pathname={asPath} close={clickHandler} />
            ))}
          </Section>

          <Section>
            <Link prefetch={false} href="/skin-assessment/details-form">
              <button className="skin-section" onClick={clickHandler}>
                Free Skin Assesment
                <NavigateNext isSkinAssessment={true} />
              </button>
            </Link>
          </Section>

          <Section>
            <StyledCategoryWrapper>
              <summary>
                <NavCategory data={{ name: 'My Account', val: '#', icon: <UserAccountIcon /> }} pathname={asPath} />
              </summary>

              <div className="nav-items">
                {data.accountNavItems.map((item) => {
                  if (isLoggedIn && item.id && item.id === 'mamacash') {
                    return (
                      <MCNavItem
                        key={item.name}
                        data={item}
                        pathname={asPath}
                        previewContent={
                          <Fragment>
                            View Details <NavigateNext />
                          </Fragment>
                        }
                        close={clickHandler}
                      />
                    );
                  } else if (!isLoggedIn && item.id && item.id === 'mamacash') {
                    return null;
                  }
                  return <NavItem showLoginPopUp={showLoginPopUp} isLoggedIn={isLoggedIn} key={item.name} data={item} pathname={asPath} close={clickHandler} />;
                })}
              </div>
            </StyledCategoryWrapper>
          </Section>

          {/* <Section>
            <Link prefetch={false} href="https://thedermaco.com/reviews">
              <summary>
                <NavCategory data={{ name: data.reviews.name, icon: data.reviews.icon }} pathname={asPath} />
              </summary>
            </Link>
          </Section>

          <Section>
            <Link prefetch={false} href="https://thedermaco.com/blog">
              <summary>
                <NavCategory data={{ name: data.dermaSpeak.name, icon: data.dermaSpeak.icon }} pathname={asPath} />
              </summary>
            </Link>
          </Section> */}

          <Section className="about-section">
            <StyledCategoryWrapper>
              <summary>
                <NavCategory data={{ name: 'About', val: '#', icon: <About /> }} pathname={asPath} />
              </summary>

              <div className="nav-items">
                {data.aboutSection.map(item => (
                  <NavItem key={item.name} data={item} pathname={asPath} close={clickHandler} />
                ))}
              </div>
            </StyledCategoryWrapper>
          </Section>

          <Section className="support-section">
            <StyledCategoryWrapper>
              <summary>
                <NavCategory data={{ name: 'Help & Support', val: '#', icon: <MyAccountIcon /> }} pathname={asPath} />
              </summary>

              <div className="nav-items">
                {data.supportSections.map(item => (
                  <NavItem key={item.name} data={item} pathname={asPath} close={clickHandler}/>
                ))}
              </div>
            </StyledCategoryWrapper>
          </Section>

          {/* <HelpSection as="a" onClick={() => {
            helpDeskHandler();
            clickHandler();
          }}>
            <Flex>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
              <div className="section-name">{data.chatWithUs.name}</div>
            </Flex>
          </HelpSection> */}
          
          {isLoggedIn && (
            <Link prefetch={false} href="/">
              <Section className="logout-section" onClick={() => {
                logout({ forceGuestReload: true });
                close();
              }}>
                <NavCategory
                  data={{
                    name: 'Log Out',
                    val: '#',
                    icon: <MobileLogoutIcon />,
                  }}
                  close={() => {clickHandler(); }}
                />
              </Section>
            </Link>
          )}
        </div>
      </Fragment>
    );
  }
}

const ItemsCategoryRenderer = ({ data, pathname, close, className }) => {
  if (data.categories && data.categories.length > 0) {
    return (
      <StyledCategoryWrapper className={className || ''} open>
        <summary>
          <NavCategory className={`product-category ${pathname === data.val ? 'isCurrent' : ''}`} data={data} />
        </summary>

        <div className="nav-items">
          {data.categories.map(item => (
            <NavItem key={item.name} className="product-item" data={item} pathname={pathname} close={close} />
          ))}
        </div>
      </StyledCategoryWrapper>
    );
  }

  return (
    <Link prefetch={false} href={data.val}>
      <NavCategory data={data} close={close} asLink className={`${pathname === data.val ? 'isCurrent' : ''}`} />
    </Link>
  );
};


const MCNavItem = styled(NavItem)`
  .preview-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.2em;
    color: ${props => props.theme.general.primaryColor};
    
    ${NavigateNext} {
      transform: translateY(1px);
    }
  }
`;

const StyledMobMenu = styled(MobMenu)`
  display: flex;
  flex-direction: column;
  width: 76.53vw;
  max-width: 320px;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  a.category.isCurrent ${MainText} {
    color: ${({ theme }) => theme.general.primaryColor};
  }

  ${Section}.logout-section {
    border-bottom: 0;

    ${MainText} {
      color: ${({ theme }) => theme.general.primaryColor};
    }

    ${NavigateNext} {
      display: none !important;
    }
  }
  .skin-section {
    background-color:${({ theme }) => theme.general.primaryColor};
    padding: 10px 22px;
    border-radius: 4px;
    color: #ffffff;
    font-size: 13px;
    margin-left: 2rem;
  }

  .category:not(:first-child),
  ${StyledCategoryWrapper}:not(:first-child) {
    margin-top: 0.75rem;
  }

  .track-order {
    i.category-icon svg {
      width: 18px;
      height: 13px;
    }
  }
`;


const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logoutRequest, dispatch),
  showLoginPopUp: bindActionCreators(showLoginPopUp, dispatch),
});

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  user: makeSelectUser(),
});

MobMenu.propTypes = {
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  setMobileLogin: PropTypes.func,
  showLoginPopUp: PropTypes.func,
};

MobMenu.defaultProps = {
  logout: noop,
  isLoggedIn: false,
  setMobileLogin: noop,
  showLoginPopUp: noop,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyledMobMenu);
