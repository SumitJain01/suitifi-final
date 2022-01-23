import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { compose, propOr } from 'ramda';
import { noop } from 'ramda-adjunct';
import { loadProductError, loadProductSuccess, getRelatedRequest, getUpsellsRequest, getCrossSellsRequest } from 'containers/Product/redux/actions';
import { makeSelectRelatedProducts, makeSelectCrossSells, makeSelectUpsells, makeSelectRecentProducts } from 'containers/Product/redux/selectors';
import { addToCart as cartAdder, closeCart } from 'containers/Cart/redux/actions';
import { makeSelectCartOpen, makeSelectTotalProductQty, makeSelectCartCategoryName } from 'containers/Cart/redux/selectors';
import { makeUTMParams, makeSelectTotals } from "containers/Checkout/redux/selectors";
import { makeSelectUserInfo, makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { openModal, hideSnackBar , hideSnackBarPDP } from 'containers/Global/redux/actions';
import { makeSelectShowSnackBar, makeSelectCurrency } from 'containers/Global/redux/selectors'
import { makeSelectUser} from "containers/Auth/redux/selectors";
import ProductView from 'containers/Product/components/ProductView';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadProductSuccess(this.props?.product);
    this.props.hideSnackBar();
    this.props.hideSnackBarPDP();
  
    if (process.browser) {
      window.onpopstate = event => {
        const cartState = this.props.cartState
        if (cartState) {
          this.props.closeCart()
        }
      }
    }

    if (this.props.product) {
      setTimeout(() => {
        const { id } = this.props.product;
       id && (
        this.props.getCrossSells(id),
        this.props.getRelated(id),
        this.props.getUpsells(id)
        )}, 0);
    }
  }

  componentDidUpdate(pP) {
    if (this.props.product.id !== pP.product.id) {
      const { id } = this.props.product;
      id && (
        this.props.loadProductSuccess(this.props?.product),
        this.props.getCrossSells(id),
        this.props.getRelated(id),
        this.props.getUpsells(id)
      )
    }
  }

  render() {
    if (!this.props.product) return null;
    return (
      <ProductView
        key={this.props.product.slug}
        {...this.props}
        product={{
          ...this.props.product,
          customattributes: [
            ...this.props.product.customattributes || [],
            ...this.props.productContent || [],
          ],
        }}
        categories={this.props.categories}
        reviews={this.props.reviews}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: bindActionCreators(cartAdder, dispatch),
  getRelated: bindActionCreators(getRelatedRequest, dispatch),
  getUpsells: bindActionCreators(getUpsellsRequest, dispatch),
  getCrossSells: bindActionCreators(getCrossSellsRequest, dispatch),
  openModal: bindActionCreators(openModal, dispatch),
  loadProductSuccess: bindActionCreators(loadProductSuccess, dispatch),
  loadProductError: bindActionCreators(loadProductError, dispatch),
  closeCart: bindActionCreators(closeCart, dispatch),
  hideSnackBar: bindActionCreators(hideSnackBar, dispatch),
  hideSnackBarPDP: bindActionCreators(hideSnackBarPDP, dispatch),
});

const mapStateToProps = createStructuredSelector({
  snackBar: makeSelectShowSnackBar(),
  related: makeSelectRelatedProducts(),
  currency: makeSelectCurrency(),
  crossSells: makeSelectCrossSells(),
  upsells: makeSelectUpsells(),
  recent: makeSelectRecentProducts(),
  cartState: makeSelectCartOpen(),
  trackingData: makeUTMParams(),
  user: makeSelectUser(),
  addresses: compose(propOr(false, "addresses"), makeSelectUserInfo()),
  walletBalance: makeSelectCreditBalance(),
  quantity: makeSelectTotalProductQty(),
  totals:makeSelectTotals(),
  categoryName:makeSelectCartCategoryName(),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductContainer));

ProductContainer.propTypes = {
  snackBar: PropTypes.bool,
  hideSnackBar : PropTypes.func,
  hideSnackBarPDP: PropTypes.func,
  addToCart: PropTypes.func,
  getRelated: PropTypes.func,
  getReviews: PropTypes.func,
  getUpsells: PropTypes.func,
  getCrossSells: PropTypes.func,
  openModal: PropTypes.func,
  product: PropTypes.object.isRequired,
  reviews: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  related: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.object)]),
};

ProductContainer.defaultProps = {
  snackBar: false,
  hideSnackBar: noop,
  hideSnackBarPDP: noop,
  addToCart: noop,
  getRelated: noop,
  getReviews: noop,
  getUpsells: noop,
  getCrossSells: noop,
  openModal: noop,
  reviews: false,
  related: false,
};
