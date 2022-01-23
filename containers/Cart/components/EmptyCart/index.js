import React, { Fragment } from 'react';
import { noop } from 'ramda-adjunct';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Button from 'shared/components/Button';
import { darken } from 'polished';
import Gap from 'shared/components/Gap';
import PropTypes from 'prop-types';
import { closeCart } from 'containers/Cart/redux/actions';
import config from 'config/env';
import LazyLoad from 'react-lazyload';

function EmptyCart({ closeCart, loading }) {
  return (
    <Empty>
      {!loading &&
      <Fragment>
        <LazyLoad>
          <img 
            className="empty-cart-img" 
            sizes="(max-width: 768px) 238px,
                  354px"
            src={`https://honasa-tdc-static-staging.imgix.net/static/dermaco_bag_desktop.png?auto=compress&fm=webp`} 
            alt=""
            width="201"
            height="201"
          ></img>
          <Gap h="1rem" />
          <div className="title">
            Your cart is empty !
          </div>
          <Gap h="1rem" />
          <div className="subtitle">
            It's a good day to buy the items you saved for later
          </div>
          <Gap h="1rem" />
          <Link prefetch={false} href="/products">
            <StyledButton center as="a" onClick={closeCart}>SHOP NOW</StyledButton>
          </Link>
        </LazyLoad>
      </Fragment>
      }
    </Empty>
  );
}

const mapDispatchToProps = dispatch => ({
  closeCart: bindActionCreators(closeCart, dispatch)
})

export default connect(null, mapDispatchToProps)(EmptyCart);

const Empty = styled.div`
  font-family: Roboto, sans-serif;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .empty-cart-img {
    max-width: 238px;
  }

  .title {
    font-size: 1.2rem;
    line-height: 1.2em;
    font-weight: 600;
  }
  
  .subtitle {
    font-size: 0.8rem;
    line-height: 1.4em;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    .subtitle {
      font-size: 0.9rem;
      font-weight: 400;
    }
    .title {
      font-size: 1.4rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.general.primaryColor};
  color: #fff;
  border-radius: 5px;
  padding: 0.5em 1.5em;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 0px;

  &:hover, &:active {
    color: #fff;
    background: ${props => darken(0.15, props.theme.general.primaryColor)};
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

EmptyCart.propTypes = {
  clickHandler: PropTypes.func,
  loading: PropTypes.bool,
};

EmptyCart.defaultProps = {
  clickHandler: noop,
  loading: false,
};

