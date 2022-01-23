import React, { Component } from 'react';
import { includes, propSatisfies, complement, identity } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import request from 'lib/request';
import { loadProductsRequest, setSortBy, resetSortBy, setFilterBy, resetFilterBy } from 'containers/Products/redux/actions';
import { makeSelectMEFE } from 'containers/Global/redux/selectors';
import { makeSelectProductsWithCustomRecipe, makeSelectSortBy, makeSelectFilterBy } from 'containers/Products/redux/selectors';
import ShopPage from 'containers/Shop/components/ShopPage';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, PRODUCTS_CONTENT_ID } from 'utils/constants/index'

class ShopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: null
    }
  }

  componentDidMount() {
    this.props.loadProductsRequest();
    this.getBanners();
  }

  getBanners = async () => {
    try {
      const productsBanners= null;
      // = await request(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${PRODUCTS_CONTENT_ID}`, {}, true)
      this.setState({ banners: productsBanners })
    } catch (err) {
      this.setState({ banners: null });
    }
  }

  render() {
    return (
      <ShopPage {...this.props} {...this.state} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allProducts: makeSelectProductsWithCustomRecipe(propSatisfies(complement(includes)('37'), 'categories')),
  sortByProp: makeSelectSortBy(),
  filterByProp: makeSelectFilterBy(),
  state: identity,
  mefe: makeSelectMEFE()
});

const mapDispatchToProps = dispatch => ({
  loadProductsRequest: bindActionCreators(loadProductsRequest, dispatch),
  setSortBy: bindActionCreators(setSortBy, dispatch),
  resetSortBy: bindActionCreators(resetSortBy, dispatch),
  setFilterBy: bindActionCreators(setFilterBy, dispatch),
  resetFilterBy: bindActionCreators(resetFilterBy, dispatch)
});
const mergeProps = (propsFromReduxState, propsFromActions, ownProps) => {
  const { state, sortByProp, filterByProp, preorders, productEntities, mefe } = propsFromReduxState;
  const allProducts = makeSelectProductsWithCustomRecipe(propSatisfies(complement(includes)('37'), 'categories'), filterByProp, sortByProp)(state);
  return {
    ...propsFromActions,
    allProducts,
    mefe,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ShopContainer);
