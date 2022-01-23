import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import config from 'config/env';
import { createStructuredSelector } from 'reselect';
import Price from 'containers/Product/components/Price';
import { getImgixImageFromMagentoUrl } from 'utils/productModule';
import { getPDPRouteFromProduct } from 'utils/helpers/product';
import * as cartActionCreators from 'containers/Cart/redux/actions';
import { noop } from 'ramda-adjunct';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';
import Link from 'next/link';
import QuantitySelector from 'shared/components/QuantitySelector';
import Flex from 'shared/components/Flex';
import Icon from 'react-icons-kit';
import { trash } from 'shared/components/Icons';
import cogotoast from 'cogo-toast';
import {makeSelectUser} from 'containers/Auth/redux/selectors'
import { makeSelectIsInert } from 'containers/Cart/redux/selectors';
import { withRouter } from 'next/router';

const makeItemRenderer = ({
  clickHandler = noop, isImmutable, isWishlist,
}) => {
  class CartItemRenderer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        qty: props?.item?.quantity,
      };
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (
        this.props.item !== nextProps.item
        || this.props.loading !== nextProps.loading
        || nextState.qty !== this.state.qty
      ) {
        return true;
      }
      return false;
    }

    componentDidUpdate(pP, pS) {
      const { item } = this.props;
      if (pS.qty !== this.state.qty) {
        this.props.editCartRequest({
          product: item,
          qty: this.state.qty,
        });
      }
    }

    render() {
      const currency = { label: 'INR', value: 1 };
      const { item } = this.props;
      const isInert = this.props.isInert;
      const priceProps = {
        currency: currency,
      }

      const handleCartBack = () => {
        this.props.router.replace(`${this.props.router.asPath}`)
        if(process.browser){
          window.onpopstate = event => {
            history.go(0); 
          }
        }
      }
     const pricing = item?.product?.price_range?.minimum_price?.final_price?.value;
      if (item.price == item.original_price) {
        priceProps.price = (Math.round(magePriceStringToNumber(pricing) * item?.quantity * 100) / 100);
      } else {
        priceProps.price = (Math.round(magePriceStringToNumber(pricing) * item?.quantity * 100) / 100);
        priceProps.specialPrice = (Math.round(magePriceStringToNumber(pricing) * item?.quantity * 100) / 100);
      }

      if(Number(priceProps.price === 0)){
        priceProps.specialPrice = 0;
      }
      return (
        <Flex className="CartItem_Holder px-rem" wrap="no-wrap" align="flex-start" key={item.id}>
          {
            <div onClick={clickHandler} className="Product_Image_Container">
              {
                priceProps.specialPrice !== 0 
                ?
                  <Link prefetch={false} href={getPDPRouteFromProduct({ slug: item.slug })}>
                    <a onClick={() => {handleCartBack(); clickHandler;}}>
                      <img src={getImgixImageFromMagentoUrl(item?.product?.image?.url, '?w=100')} alt={item?.product?.name} />
                    </a>
                  </Link>
                : <img src={getImgixImageFromMagentoUrl(item?.product?.image?.url, '?w=100')} alt={item?.product?.name} />
              }
            </div>
          }
          <div className="CartItem_Content">
            <div className="CartItem_Title" onClick={clickHandler}>
              {<a onClick={() => {handleCartBack()}}>{item?.product?.name}</a>}
            </div>

            {
              priceProps.specialPrice !== 0 
              ? <Price className="price-container" {...priceProps} />
              : <div style={{ fontWeight: 'bold', color: '#000000' }}>Free</div>
            }

            <Flex justify="space-between" wrap="nowrap" style={{ alignSelf: 'stretch' }} className="CartItem_Actions">
              {this.renderActions(priceProps)}
              <div
                className="item-remove-icon"
                onClick={isInert ? noop : (event) => {
                  if (event.detail == 1) {
                    cogotoast.loading('Deleting item from Cart...')
                    this.props.editCartRequest({ product: item, qty: 0 })
                  }
                }}
              >
                {/* {!item.categories.includes(config.removeQtySelector) && priceProps.specialPrice === 0 ? null : <Icon icon={trash} size={25} style={{ cursor: 'pointer' }} />} */}
              </div>
            </Flex>
          </div>
        </Flex >
      );
    }
    renderActions = (priceProps) => {
      const { item } = this.props;
      const { specialPrice } = priceProps
      if (!isWishlist) {
        return (
          <Fragment>
            {
              isImmutable || !item?.id || item?.categories?.includes(config.removeQtySelector) 
              ?
                <div style={{ minWidth: '120px' }}>Qty: {item?.quantity}</div>
              :
                  (specialPrice === 0 
                    ? <div style={{ color: '#000000' }}>Qty: 1</div> 
                    :
                      <QuantitySelector
                        updateQuantity={qty => this.setState({ qty })}
                        initialValue={item?.quantity}
                        value={item?.quantity}
                        isCart={true}
                      />
                  )
            }
          </Fragment>
        );
      }
      return (
        <Fragment>
          <button
            className="CartItem_Remove"
            onClick={() => console.log('remove from wishlist')}
          >remove</button>
        </Fragment>
      );
    }
  }
  
  return connect(mapStateToProps, mapActionsToProps)(withRouter(CartItemRenderer));
};

const mapStateToProps = (state, props) => createStructuredSelector({
  isInert: makeSelectIsInert(props.item.id),
  user: makeSelectUser(),
});

function mapActionsToProps() {
  return dispatch => bindActionCreators(pick([
    'removeFromCart',
    'editCartRequest',
  ])(cartActionCreators), dispatch);
}

export default makeItemRenderer;

