import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { identity } from 'ramda';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import * as actionTypes from 'containers/Products/redux/actions';
import * as cartActionTypes from 'containers/Cart/redux/actions';
import { makeSelectCurrency , makeSelectMEFE } from 'containers/Global/redux/selectors';
import { makeSelectWishlist , makeSelectCartOpen} from 'containers/Cart/redux/selectors';
import {
  makeSelectProductEntities,
  makeSelectCategories,
  makeSelectLoading,
  makeSelectSortBy,
  makeSelectFilterBy
} from 'containers/Products/redux/selectors';
import ProductList from 'containers/Products/components/ProductList';

class ProductsContainer extends React.Component {

  componentDidMount(){
    if (process.browser) {
      window.onpopstate = event => {
        const cartState = this.props.cartState
        if (cartState) {
          this.props.closeCart()
        }
      }
    }
  }

  render() {
    return <ProductList {...this.props} />;
  }
}

const actionToMap = {
  loadProductsRequest: actionTypes.loadProductsRequest,
  addToWishlist: cartActionTypes.addToWishlist,
  removeFromWishlist: cartActionTypes.addToWishlist,
  closeCart: cartActionTypes.closeCart,
  setSortBy: actionTypes.setSortBy,
  resetSortBy: actionTypes.resetSortBy,
  setFilterBy: actionTypes.setFilterBy,
  resetFilterBy: actionTypes.resetFilterBy
};

const mapDispatchToProps = dispatch => bindActionCreators(actionToMap, dispatch);

const mapStateToProps = createStructuredSelector({
  productEntities: makeSelectProductEntities(),
  categories: makeSelectCategories(),
  currency: makeSelectCurrency(),
  wishlist: makeSelectWishlist(),
  loading: makeSelectLoading(),
  state: identity,
  sortBy: makeSelectSortBy(),
  filterBy: makeSelectFilterBy(),
  cartState: makeSelectCartOpen(),
  mefe : makeSelectMEFE()
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

ProductsContainer.propTypes = {
  loadProducts: PropTypes.func,
  addToWishlist: PropTypes.func,
  removeFromWishlist: PropTypes.func,
  productSlugs: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  categoryName: PropTypes.string,
  isMobile: PropTypes.bool,
  isServer: PropTypes.bool,
  query: PropTypes.object,
};

ProductsContainer.defaultProps = {
  loadProducts: noop,
  addToWishlist: noop,
  removeFromWishlist: noop,
  productSlugs: [],
  image: '',
  categoryName: '',
  isMobile: false,
  isServer: false,
  query: {},
};
