import { useMutation } from "@apollo/client";
// import config from 'config/env';
import AuthPage from 'containers/Auth/components/Join';
import LoginTrigger from 'containers/Auth/components/LoginTrigger';
import { makeSelectLoggedIn, makeSelectLoginPopUp, makeSelectUserId } from 'containers/Auth/redux/selectors';
import CartTrigger from 'containers/Cart/components/CartTrigger';
import { updateLocalCartData } from 'containers/Cart/redux/actions';
import { makeSelectMagentoCartId } from 'containers/Cart/redux/selectors';
import { makeUTMParams } from "containers/Checkout/redux/selectors";
import { hideSnackBar, showSnackBar } from 'containers/Global/redux/actions';
import { makeSelectShowSnackBar, makeSelectShowSnackBarPDP } from 'containers/Global/redux/selectors';
import { createGuestCartMutation } from "GraphQL/Mutations";
import { dataLayerFn } from 'lib/analytics/datalayer';
import makeClevertap from "lib/makeClevertap";
import { debounce } from 'lodash';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { pathOr } from 'ramda';
import React, { useEffect, useMemo, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Overlay from 'shared/components/Overlay';
import ScrollLock from 'shared/components/ScrollLock';
import { MenuBack, ProductAdded } from 'shared/components/SVGIcons';
import styled from 'styled-components';
import theme from 'theme/index';
import { hideSnackBarOn } from 'utils/constants/index';
import detectMobile from 'utils/helpers/mobileDetect';
import { MobileSearch } from './Mobile/SvgIcons';
import MobileTrigger from './Mobile/Trigger';
import Nav from './Nav';
import Search from './Search';
const MobileMenuDrawer = dynamic(() => import('./Mobile/Drawer'))
const SearchDrawer = dynamic(() => import('./Search/Drawer'))
const MobileNav = dynamic(() => import('./Mobile/Nav'))
const MobileLoginUIHandler = dynamic(() => import('./Mobile/components/MobileLoginUIHandler'))
const Cart = dynamic(() => import('containers/Cart'))
const clevertap = makeClevertap();
// import '../../../../../static/mamaearth/Mamaearth_Goodness_Inside.png'
function MainMenu({
  className,
  cartOpen,
  cartItemsLength,
  closeCart,
  openCart,
  cartMessage,
  asPath,
  searchKey,
  setSearchKey,
  popularSearches,
  mefe,
  searchOpen,
  setSearchOpen,
  customerID,
  trackingData,
  snackBar,
  snackBarPDP,
  showSnackBar,
  hideSnackBar,
  loginPopUp,
  isLoggedIn,
  updateLocalCartData
}) {
  const router = useRouter();

  function closeCartHandler() {
    closeCart();
    history.back();
  }
  const [scrolled, setScrolled] = useState(false);
  const [allPopularSearches, setallPopularSearches] = useState([]);
  const [copyPopularSearches, setcopyPopularSearches] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [debouncedSearchKey, setDebouncedSearchKey] = useState('');
  const [createGuestCart, { cartLoading, cartError }] = useMutation(createGuestCartMutation);
  const cartIdSelector = useSelector(makeSelectMagentoCartId())
  const cartClickHandler = useMemo(() => cartOpen
    ? () => closeCartHandler()
    : () => {
      openCart('cart');
    }, [cartOpen]);

  const isMobile = detectMobile();

  const addToCartHandler = () => {
    dataLayerFn(customerID);
    cartClickHandler();
  }
  const [isMobileLogin, setIsMobileLogin] = useState(false);
  // const firstUpdate = useRef(true);

  function searchStartCleverTap(customerID) {
    clevertap.event.push("searchStarted", {
      platform: "mewebsite",
      customerID: customerID ? customerID : false,
      timeStamp: new Date().getTime(),
    });
  }

  function selectNavigationDrawerCleverTap() {
    clevertap.event.push('selectNavigationDrawer', {
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      pageTitle: document.title,
      clickUrl: window.location.pathname.split("/").slice(-1)[0],
      ...trackingData
    });
  }
  useEffect(() => {
    if (!cartIdSelector ) {
      createGuestCart()
        .then(response => {
          updateLocalCartData({ cartId: response?.data?.createEmptyCart, items: [] }),
            localStorage.setItem(
              "guestCartId",
              JSON.stringify(response?.data?.createEmptyCart)
            );
        })
        .catch(err => {
          console.log(`err`, err)
        });
    }
    else {
      updateLocalCartData({ cartId: JSON.parse(localStorage.getItem('guestCartId')), items: JSON.parse(localStorage.getItem('items')) });
    }
  },[])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    setSearchKey('')
    setSearchOpen(false);
  }, [router]);

  useEffect(() => {
    if (
      (router.asPath.split('/')[1] === 'products' && !snackBarPDP) ||
      (hideSnackBarOn.includes(router.asPath.split('/')[1]))
    ) {
      hideSnackBar();
    } else {
      cartItemsLength ? showSnackBar() : hideSnackBar();
    }
  }, [cartItemsLength, snackBarPDP, router]);

  useEffect(() => {
    setallPopularSearches(popularSearches);
    setcopyPopularSearches(popularSearches);
  }, [popularSearches])

  useEffect(() => {
    let element = document.getElementById("mobileSearch")
    if (element) {
      element.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
          document.getElementById("mobileSearch").blur();
        }
      });
    }
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (router.asPath === "/contact-us")
      setScrolled(false);
    else if (offset > 400)
      setScrolled(true);
    else
      setScrolled(false);
  }

  const debounceInput = (event) => {
    event.persist();
    setSearchKey(event.target.value);

    const debouncedFn = debounce(() => {
      let searchString = event.target.value;
      setDebouncedSearchKey(searchString);
    }, 700);
    debouncedFn();
  }

  let navbarClasses = [];
  if (scrolled) {
    navbarClasses.push('scrolled');

  }

  return (
    <div className={className}>
      <div className={navbarClasses.join(" ")}>
        <div className="legacy search-row">
          {
            router.asPath === '/checkout' && isMobile ?
              <div onClick={() => { router.back() }}>
                <div>
                  <i>
                    <MenuBack />
                  </i>
                </div>
              </div>
              :
              <MobileTrigger open={menuOpen} clickHandler={() => {
                setMenuOpen(!menuOpen);
                selectNavigationDrawerCleverTap();
              }} asPath={asPath} />
          }
          <Link prefetch={false} href="/" passHref>
            <a className="mamaearth-logo-wrapper">
              <img
                alt="suitifi"
                className="logo"
                onClick={() => {
                  setSearchKey('');
                  setDebouncedSearchKey('');
                  setSearchOpen(false);
                }}
                src={`/static/mamaearth/Suitifi-Logo-min.png`}
              />
            </a>
          </Link>
          {asPath !== '/checkout' && asPath !== '/contact-us' && (
            <div className="ShortSearchBar">
              <Input
                className="search-input"
                type="search"
                value={searchKey}
                placeholder="Search for products..."
                onClick={() => {
                  setSearchOpen(true);
                  setallPopularSearches(copyPopularSearches);
                  searchStartCleverTap(customerID);
                }}
                onChange={debounceInput}
              />

              {!searchOpen && (
                <button className="search-button">
                  <i className="search-icon">
                    <MobileSearch />
                  </i>
                  Search
                </button>
              )}

              {searchOpen && (
                <div
                  className="search-clear-icon close"
                  onClick={() => {
                    setSearchKey('');
                    setDebouncedSearchKey('');
                    setSearchOpen(false);
                  }}
                >
                  <span
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    CLOSE
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="flex">
            <CartTrigger asPath={asPath} clickHandler={cartClickHandler} open={cartOpen} itemCount={cartItemsLength} />
            {asPath !== '/checkout' && <LoginTrigger asPath={asPath} />}
          </div>
        </div>
        {!isLoggedIn && loginPopUp && <AuthPage />}
        <Nav asPath={asPath} className="categories-row" />
      </div>
      {asPath !== '/checkout' && asPath !== '/contact-us' && !asPath.includes('skin-assessment') && (
        <div className="legacy FullSearchBar">
          <Input
            id="mobileSearch"
            autocomplete="off"
            autocapitalize="off"
            type="search"
            value={searchKey}
            placeholder="Search for products..."
            onClick={() => {
              setSearchOpen(true);
              setallPopularSearches(copyPopularSearches);
            }}
            onChange={debounceInput}
          />
          {searchOpen && (
            <div
              className="search-clear-icon close"
              onClick={() => {
                setSearchKey('');
                setDebouncedSearchKey('');
                setSearchOpen(false);
              }}
            >
              <span
                style={{
                  // marginRight: 17,
                  textDecoration: 'underline',
                }}
              >
                CLOSE
              </span>
            </div>
          )}
        </div>
      )}

      {(searchOpen || searchKey) && (
        <SearchDrawer pose={searchOpen || searchKey !== '' ? 'open' : 'closed'}>
          <Grid
            style={{ marginTop: '7rem', overflowY: 'auto', overflowX: 'hidden', marginBottom: '3rem' }}
            className="customScrollBar"
            fluid
          >
            {/* pathOr(false, ['ps'], mefe) */}
            {pathOr(false, mefe) && !searchKey && (
              <Row>
                <Col xs={8} md={10} lg={10}>
                  <StyledP>{allPopularSearches.length > 0 ? 'Popular Search' : ''}</StyledP>
                </Col>
                <Col xs={4} md={2} lg={2}>
                  {/* <StyledP2 onClick={() => {
                  setSearchKey('');
                  setDebouncedSearchKey('');
                  setSearchOpen(false);
                }}>
                  CLOSE
                  <Icon icon={x} size={18} style={{ marginTop: -5 }} />
                </StyledP2> */}
                </Col>
              </Row>
            )}
            <Row>
              <Col>
                <div style={{ width: '96vw', backgroundColor: 'transparent', height: 5 }}></div>
              </Col>
            </Row>
            {/* pathOr(false, ['ps'], mefe) */}
            {pathOr(false, mefe) && !searchKey && (
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  {allPopularSearches.length != 0
                    ? allPopularSearches.map((item, index) => {
                      return (
                        <StyledButton
                          key={index}
                          onClick={() => {
                            setSearchKey(item);
                            setDebouncedSearchKey(item);
                            setallPopularSearches([]);
                          }}
                        >
                          {item}
                        </StyledButton>
                      );
                    })
                    : null}
                </Col>
              </Row>
            )}
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                {debouncedSearchKey == '' && <ScrollLock />}
                {debouncedSearchKey !== '' && <Search searchKey={debouncedSearchKey} />}
              </Col>
            </Row>
          </Grid>
          <ScrollLock />
        </SearchDrawer>
      )}
      <Cart cartMessage={cartMessage} clickHandler={cartClickHandler} open={cartOpen} />
      <MobileMenuDrawer pose={menuOpen ? 'open' : 'closed'} isOpen={menuOpen} >
        {/* <Gap h="1rem" /> */}
        {menuOpen && <MobileNav menuOpen clickHandler={() => setMenuOpen(false)} asPath={asPath}
          setMobileLogin={setIsMobileLogin}
        />
        }
      </MobileMenuDrawer>
      {isMobileLogin &&
        <MobileLoginUIHandler setMobileLogin={setIsMobileLogin} />
      }
      <Overlay className="legacy" open={menuOpen} onClick={() => setMenuOpen(false)} />

      {snackBar ?
        <a>
          <PopButton>
            <div className="flexview">
              <i>
                <ProductAdded fill={theme.general.primaryColor} />
              </i>
              <div>Added To Cart</div>
            </div>
            <PayButton className="flexview" onClick={addToCartHandler}>
              <div>View Cart</div>
              <img style={{ height: '1rem', width: '1rem' }} src="/static/mamaearth/view_cart.svg" />
            </PayButton>
          </PopButton>
        </a>
        : null
      }

    </div>
  );
}

const PopButton = styled.button`
  .flexview {
    display : flex;
    align-items: center;

    i {
      margin-right: 5px;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 1px;
  padding: 0.6rem;
  width: 100%;
  background-color: rgb(0,0,0,0.6);
  color: white;
  
  @media only screen and (min-width: 768px) {
    display: none;
  }`;

const PayButton = styled.button`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2em;
    letter-spacing: 1px;
    padding: 0.5rem ;
    width: fit-content;
    background-color: ${({ theme }) => theme.general.primaryColor};
    color: white;
    border-radius: 3px;
    @media only screen and (min-width: 768px) {
      display: none;
    }
`;


const StyledButton = styled(Button)`
  display: inline;
  font-size: .8rem;
  padding: 0.4rem;
  margin: 0rem 0.4rem 0.4rem 0.4rem;
  color: #333333;
  border: 1px solid #ccccdd;
  border-radius:2px;
  background-color: ${props => props.active ? "#dbe8e8b8" : "white"};
  &:hover {
    background-color:#dbe8e8;
    color: #333333;
  }
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  padding: 0.2rem;
  margin: 0rem 0.4rem 0.4rem 0.4rem;
  color: #444444;
  &:hover {
    color: #333333;
  }
`

const StyledP2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0.2rem;
  margin: 0.4rem 0.4rem 0.4rem 0.4rem;
  color: #444444;
  background-color:#dbe8e8;
  border: 1px solid #cad7d7;
  &:hover {
    color: #333333;
    background-color:#cad7d7;
  }
`

const styledMainMenu = styled(MainMenu)`
.flex{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  /* .navbar {
    box-shadow: 0px 3px 6px red;
  } */
  background-color: #fff;
  .legacy {
  /* > div { */
    
    padding: 0.25rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }
  
  .mamaearth-logo-wrapper {
    margin-right: auto;
    margin-left: 0.25rem;
  }
  
  .search-row {
    position: relative;
    @media (max-width: 768px) {
      height: 48px;
    }
  }

  .scrolled{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgb(0 ,0,0,0.05);
  }

  .close {
    padding-left: 4px;
    padding-right: 4px;
    color: #444444;
    /* background-color:#dbe8e8;
    border: 1px solid #cad7d7; */
    &:hover {
      /* color: #333333;
      background-color:#cad7d7; */
    }
  }
  .ShortSearchBar {
    @media (max-width: 768px) {
      display: none;
    }
    position: relative;
  }
  .search-clear-icon {
    position: absolute;
    top: 14%;
    cursor: pointer;
    right: 5%;
  }
  
  .FullSearchBar {
    position: relative;
    padding-top: 0;
    
    #mobileSearch {
      padding: 0.375rem 0.75rem;
      border-radius: 5px;
      
      ::placeholder {
        color: ${({ theme }) => theme.colors.themePlaceholderGray};
      }
    }
    
    .search-clear-icon {
      top: 20%;
      right: 5%;
    }
  }

  .logo {
    @media only screen and (max-width: 1024px) {
      padding-top: 2px;
      max-width: 120px;
    }

    @media only screen and (max-width: 640px) {
      padding-top: 2px;
      max-width: 90px;
    }

  }

  .customScrollBar {
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .selectCurrency {
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    .select__control {
      width: 100%;
    }
  }
  
  @media only screen and (min-width: 411px) {
    .mamaearth-logo-wrapper {
      margin-left: 0.5rem;
    }
  
    .FullSearchBar {
      padding-top: 0.25rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .legacy {
    /* > div { */
      padding: 0.5rem 1rem;
      
    }

    .ShortSearchBar {
      font-family: Roboto, sans-serif;
      display: flex;
      margin-right: auto;
      width: 50vw;
      
      .search-input {
        color: ${({ theme }) => theme.colors.themePlaceholderGray};
        font-size: 0.95rem;
        font-weight: 400;
        padding: 0.25rem 0.75rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        
        ::placeholder {
          font-size: 0.9rem;
        }
      }
      
      .search-button {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        
        padding: 0.15rem 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${({ theme }) => theme.general.primaryColor};
        color: #FFFFFF;
        font-weight: 400;
        
        .search-icon {
          padding-right: 0.5rem;
          
          svg {
            height: 15px;
            
            path.path-selector {
              fill: #FFFFFF;
            }
          }
        }
      }
    }
    
    .FullSearchBar {
      display: none;
    }
    
    .mamaearth-logo-wrapper {
      margin-right: 3rem;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    .mamaearth-logo-wrapper {
      margin-left: 0;
      
      img {
        max-width: 130px;
      }
    }

    .ShortSearchBar {
      width: 45vw;

      .search-input {
        padding: 0.375rem 0.75rem;
        font-size: 0.9rem;

        &::placeholder {
          font-size: 0.9rem;
        }
      }
    }

    .search-row {
      padding: 0.75rem 7vw;
    }
    

    .categories-row {
      padding: 0.5rem 7vw;
      border-top: 1px solid ${props => props.theme.colors.smoke};
      box-shadow: 0px 3px 6px #0000001A;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    .mamaearth-logo-wrapper img {
      max-width: 140px;
    }

    .ShortSearchBar {
      width: 45vw;
      
      .search-button {
        padding: 0 0.75rem;
      }
    }

    .search-input {
      padding: 0.5rem 1rem;
    }
  }
  
  @media only screen and (min-width: 1400px) {
    .mamaearth-logo-wrapper img {
      max-width: 150px;
    }
    
    .ShortSearchBar {
      width: 42vw;
    }
  }
`;

const mapDispatchToProps = dispatch => ({
  showSnackBar: bindActionCreators(showSnackBar, dispatch),
  hideSnackBar: bindActionCreators(hideSnackBar, dispatch),
  updateLocalCartData: bindActionCreators(updateLocalCartData, dispatch),

});

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  trackingData: makeUTMParams(),
  snackBar: makeSelectShowSnackBar(),
  snackBarPDP: makeSelectShowSnackBarPDP(),
  customerID: makeSelectUserId(),
  loginPopUp: makeSelectLoginPopUp(),
});

export default connect(mapStateToProps, mapDispatchToProps)(styledMainMenu);
