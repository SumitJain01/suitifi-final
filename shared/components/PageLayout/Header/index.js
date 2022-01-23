import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import request from 'lib/request'
import { isArray } from 'ramda-adjunct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import dataLayer from 'lib/gtmDataLayer';
import { pathOr } from 'ramda';
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import {
  openCart as openCartAction,
  closeCart as closeCartAction,
  openCartExplicitly,
  closeCartExplicitly,
} from 'containers/Cart/redux/actions';
import {
  makeSelectCartOpen,
  makeSelectCartItemsLength,
  makeSelectIds,
  makeSelectTotalProductQty,
  makeSelectCartProductName,
  makeSelectCartCategoryName,
  makeSelectCartProductIds,
  makeSelectCartProductsArray
} from 'containers/Cart/redux/selectors';
import { makeSelectProduct } from 'containers/Product/redux/selectors';
import { makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { makeSelectTotalSegments, makeSelectConfirmedOrder, makeUTMParams, makeSelectOldProductIds } from 'containers/Checkout/redux/selectors';
import { makeSelectMEFE } from 'containers/Global/redux/selectors';
import { makeSelectUser } from "containers/Auth/redux/selectors";
import TopBar from './TopBar';
import MainMenu from './MainMenu';
import clevertapWebPush from './clevertapWebPush';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, HEADER_STRIP_CONTENT_ID } from 'utils/constants/index'



function Header(props) {
  const { mefe, userInfo, quantity, trackingData } = props
  const router = useRouter();
  const pathname = router?.pathname;
  
  function dynxDatalayer() {
    let totalValue = pathOr(0, ['value'], props.totalSegments.find((item) => item.code == "grand_total_adjusted"));
    let ecomm_pagetype = "other";
    let ecomm_prodid = [];
    let ecomm_totalvalue = 0;
    ecomm_totalvalue = totalValue;
    

    if (pathname == "/product") {//product page
      ecomm_pagetype = "product";
      ecomm_prodid = JSON.parse(localStorage.getItem('id'));
      ecomm_totalvalue = pathOr(0, ['price'], props.product);
      dataLayer.push({
        event: "dynx_rmkt",
        google_tag_param: {
          ecomm_pagetype,
          ecomm_prodid,
          ecomm_totalvalue
        }
      });
    }
    else if (pathname == "/checkout") {//cart page
      for(let i=0; props.cartProductsArray && i< props.cartProductsArray.length; i++){
        ecomm_prodid[i] = props.cartProductsArray[i].old_productid
      }
      ecomm_pagetype = "checkout";
      dataLayer.push({
        event: "dynx_rmkt",
        google_tag_param: {
          ecomm_pagetype,
          ecomm_prodid,
          ecomm_totalvalue
        }
      });
    }
    else if (pathname == "/order-success" || pathname == "/order-success-new") {//purchase
      ecomm_pagetype = "purchase";
      let confirmedOrderInfo = JSON.parse(localStorage.getItem('orderDetails'));
      let old_productid = JSON.parse(localStorage.getItem('itemIds'));
      let ids=old_productid;
      let total = pathOr(0, ['base_grand_total'], confirmedOrderInfo);
      ecomm_prodid = ids;
      ecomm_totalvalue = total;
      dataLayer.push({
        event: "dynx_rmkt",
        google_tag_param: {
          ecomm_pagetype,
          ecomm_prodid,
          ecomm_totalvalue
        }
      });
    }
  }
  let locationRef = useRef(typeof window !== 'undefined' && window.location.href);
  function manipulateCartState() {
    let location = locationRef.current;
    let url = new URL(location);
    let searchParams = new URLSearchParams(url.search)
    let cartState = searchParams.get('cartState');
    if (cartState == "open") {
      //explicitly open cart
    }
    else {
      //explicitly close cart
      props.closeCartExplicitly();
    }
  }

  function pageVisitCleverTap() {
    clevertap.event.push("pageVisit", {
      ...trackingData,
      quantity,
      platform: "mewebsite",
      timeStamp: new Date().getTime(),
      pageTitle: document.title,
      clickSource: window.location.href,
      clickTarget: router.asPath,
      walletBalance: props.walletBalance,
      categoryName: props.categoryName,
      productId: props.productId,
      productName: props.productName,
      ...(userInfo && {
        userName: userInfo.firstName + " " + userInfo.lastName,
        email: userInfo.email,
        phone: userInfo.phone,
        gaUserId: userInfo.id,
      }),
    })
  }

  const getOfferStripData = async() => {
    let isContentful = true, data = [];
    try {
      //  data = await request(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${HEADER_STRIP_CONTENT_ID}`, {}, isContentful);
      setOfferStripData(data);
    } catch (err) {
      setOfferStripData([]);
    }
    pathname !== '/checkout'
    //  && clevertapWebPush(data);
  }

  useEffect(() => {
    manipulateCartState();
    ['/order-success-new', '/order-success', '/checkout'].includes(pathname) && dynxDatalayer();
      pageVisitCleverTap()
  }, [pathname]);

  useEffect(() => {
    if (props.product) {
      pathname == '/product' && dynxDatalayer();
    }
  }, [props.product])

  useEffect(() => {
    getOfferStripData();
  },[])

  const [offerStripData, setOfferStripData] = useState([]);
  const [offers] = useState({});
  const [searchKey, setSearchKey] = useState('');
  const [popularSearches, setPopularSearches] = useState([]);
  const [filteredPopularSearches, setfilteredPopularSearches] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  function getUnique(array) {
    let new_array = [];
    let uniqueArray = [];
    let i, j;
    array.map(item => {
      new_array.push(item.replace(/\s/g, "").toUpperCase());
    })
    for (i = 0; i < new_array.length; i++) {
      if ((array[i].indexOf(' ') === -1)) {
        uniqueArray.push(array[i].toUpperCase());
      }
    }

    for (i = 0; i < array.length; i++) {
      for (j = 0; j < new_array.length; j++) {
        if (array[i].replace(/\s/g, "").toUpperCase() != new_array[j]
          && uniqueArray.indexOf(array[i].replace(/\s/g, "").toUpperCase()) == -1
          && uniqueArray.indexOf(array[i].toUpperCase()) == -1) {
          uniqueArray.push(array[i].toUpperCase());
        }
      }
    }
    setfilteredPopularSearches(uniqueArray);
  }

  useEffect(() => {
    setPopularSearches([
      'UBTAN',
      'VITAMIN C SERUM',
      'BABY PRODUCTS',
      'SERUMS',
      'SHAMPOO',
      'FACE WASH',
      'ONION HAIR OIL',
      'HAIR MASK',
    ])
  }, [])
  return (
    <Wrapper position={searchKey === '' ? 'relative' : 'sticky'}>
      {/* <TopBar asPath={props.router.asPath} isLoggedIn={props.isLoggedIn} offerStripData={offerStripData} /> */}
      <MainMenu
        asPath={props.router.asPath}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        cartMessage={isArray(offers) && offers.find(offer => offer.id === 'cart-offer-bar')}
        mefe={mefe}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        popularSearches={filteredPopularSearches}
        {...props}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: ${({ position }) => position};
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.scheme.white};
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
`;

const mapDispatchToProps = dispatch => ({
  openCart: bindActionCreators(openCartAction, dispatch),
  closeCart: bindActionCreators(closeCartAction, dispatch),
  closeCartExplicitly: bindActionCreators(closeCartExplicitly, dispatch),
  openCartExplicitly: bindActionCreators(openCartExplicitly, dispatch)
});

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLoggedIn(),
  cartOpen: makeSelectCartOpen(),
  cartItemsLength: makeSelectCartItemsLength(),
  mefe: makeSelectMEFE(),
  cartIds: makeSelectIds(),
  totalSegments: makeSelectTotalSegments(),
  product: makeSelectProduct(),
  confirmedOrderInfo: makeSelectConfirmedOrder(),
  userInfo: makeSelectUser(),
  trackingData: makeUTMParams(),
  quantity: makeSelectTotalProductQty(),
  categoryName: makeSelectCartCategoryName(),
  productName: makeSelectCartProductName(),
  productId: makeSelectCartProductIds(),
  walletBalance: makeSelectCreditBalance(),
  oldProductId: makeSelectOldProductIds(),
  cartProductsArray: makeSelectCartProductsArray(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
