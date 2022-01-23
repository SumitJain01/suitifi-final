import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import styled from 'styled-components';
import Price from '../Price';
import QuantitySelector from 'shared/components/QuantitySelector';
import CartButton from 'shared/components/ProductCard/components/CartButton';
import Ratings from 'shared/components/Ratings';
import Img from 'shared/components/Image';
import { showSnackBarPDP } from 'containers/Global/redux/actions';
import Flex from 'shared/components/Flex';

const ComposedFlex = styled(Flex)`
  padding: 8px 0;
  box-shadow: ${({ theme, floating }) => floating ? theme.general.bsDeep : 'none'};
  @media only screen and (max-width: 767px){
    width:100%;
  }

  .userActions {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 767px) {
      bottom: 0;
      width: 100%;
      left: 0;
      z-index: 7;
    }
  }

  .addTocart_mobile {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
  .addTocart_desktop {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  button.icon-holder{
    border: 0px;
    width: 2rem;
    height:2rem;
    font-size: 1rem;
    @media only screen and (max-width: 768px) {
      margin-top:5px;
      height: 30px;
      width: 30px;
      border-radius:2px;
    }
    + input {
      // border-right:1px solid #8a8c8b;
      // border-left: 1px solid #8a8c8b;
    }

    &:hover {
      background: ${({ theme }) => theme.general.primaryColor};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .qty-selector {
    @media only screen and (max-width: 768px) {
      min-height:48px;
      min-width:25%;
    }
    margin: 0 8px;
    padding:4px;
  }

  .ATC_Button{
    background-color:#279989;
    padding: 0.7rem 3rem;
    border-radius:3px;
    font-size: 0.8rem;
    margin: 0 0.4rem;
    font-weight: 600;
    // line-height: 0.8rem;
    @media only screen and (max-width: 767px) {
      width: 100%;
      min-height: 48px;
      ${({ floating }) => {
    if (floating) {
      return `
          margin: 0;
          height: 56px;
          border-radius: 0px;
              `;
    }
    return '';
  }};
    }
  }

  .product_info {
    margin-left:20px;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: auto;
    }

    &_name {
      font-weight: 600;
      font-size: 15px;
      transform: translateY(6px);
    }

    .widget-ratings {
      transform: translateY(-2px);
    }
  }

  ${({ floating }) => {
    if (floating) {
      return `
        position: fixed;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        background: #efefef;
        z-index: 10;
      `;
    }
    return '';
  }};

  @media only screen and (min-width: 768px) {
    .product_info {
      display: ${({ floating }) => (floating ? 'flex' : 'none')};
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 0px;
    .product_info {
      display: none;
    }
  }
`;

const ATCContainer = styled(Flex)`
@media only screen and (max-width: 767px){
  width:100%;
}

@media only screen and (min-width: 767px) {
  margin-right:20px;
  }
`


class ProductActions extends React.Component {

  render() {
    const {
      product, addToCart, updateQuantity, disabled, floating, currency, setFloatingToFalse, isMobile,snackBar
    } = this.props;
    const Wrapper = 'div'; // floating ? Portal : 'div';
    if (!isMobile || !floating) {
      return (
        <Wrapper>
          <ComposedFlex floating={floating} flexDir="row" align="center" justify={floating && !isMobile ? 'space-between' : 'left'}>
            <div className="product_info">
              <Img src={product.images?.[0]} />
              <div style={{marginLeft:"10px"}}>
                <div className="product_info_name" style={{marginBottom:"5px"}}>{product.name}</div>
                {product.avg_rating_percent > 0 && <Ratings
                  avg_rating_percent={product.avg_rating_percent}
                />
                }
              </div>
            </div>
            <ATCContainer>
            <Flex wrap="nowrap" align="center" style={{width:"100%"}}>
              {
                floating ? <Price
                  price={product.price}
                  specialPrice={product.special_price}
                  currency={currency}
                /> : null
              }
              {Boolean((!floating || !isMobile) && (product.is_in_stock && product.qty != 0)) && <QuantitySelector
                updateQuantity={updateQuantity}
                className="qty-selector"
                name={product.name}
                isPdp
              />}
               <CartButton
            disabled={disabled}
            showIcon={false}
            productData={product}
            isPDP={true}
            clickHandler={!disabled ? () => {
              this.props.showSnackBarPDP();
              addToCart(product);
              // setFloatingToFalse();
            } : noop}
            className="ATC_Button"
          />
            </Flex>
            </ATCContainer>
          </ComposedFlex>
        </Wrapper>
      )
    }
    else {
      return (
        !snackBar?
        <ComposedFlex floating={floating} flexDir="row" align="center" justify={'center'}>
          <CartButton
            disabled={disabled}
            showIcon={false}
            productData={product}
            isPDP={true}
            clickHandler={!disabled ? () => {
              this.props.showSnackBarPDP();
              addToCart(product);
              // setFloatingToFalse();
            } : noop}
            className="ATC_Button"
          />
        </ComposedFlex> : null
      )
    }
  }
}
const mapDispatchToProps = dispatch => ({
  showSnackBarPDP: bindActionCreators(showSnackBarPDP, dispatch),
});
const mapStateToProps = createStructuredSelector({
});



export default connect(mapStateToProps,mapDispatchToProps)(ProductActions);
ProductActions.propTypes = {
  showSnackBarPDP: PropTypes.func,
  addToCart: PropTypes.func,
  disabled: PropTypes.bool,
  floating: PropTypes.bool,
  product: PropTypes.object,
  updateQuantity: PropTypes.func,
};

ProductActions.defaultProps = {
  showSnackBarPDP: noop,
  addToCart: noop,
  disabled: false,
  floating: false,
  product: {},
  updateQuantity: noop,
};
