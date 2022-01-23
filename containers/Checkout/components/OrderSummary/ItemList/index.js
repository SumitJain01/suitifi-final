import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from 'shared/components/List';
import makeItemRenderer from 'containers/Cart/components/MakeCartItemRenderer';
import { makeSelectCartProductsArray } from 'containers/Cart/redux/selectors';
import { makeSelectLoading } from 'containers/Checkout/redux/selectors';
import Item from './Item';
// eslint-disable-next-line prefer-arrow-callback
class ItemList extends React.Component {
  shouldComponentUpdate(nP) {
    if (this.props.cartProductsArray !== nP.cartProductsArray) {
      return true;
    }
    return false;
  }

  render() {
    const {
      cartProductsArray = [],
      loading,
      isImmutable,
      clickHandler,
    } = this.props;
    const ItemRenderer = makeItemRenderer({
      isImmutable,
      clickHandler,
    });
    console.log(`cartProductsArray`, cartProductsArray)
    return (
      <List
        data={cartProductsArray}
        getKeyFromItem={i => i.id}
        WrapperComponent={Item}
        ItemRenderer={props => <ItemRenderer {...props} loading={loading} />}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartProductsArray: makeSelectCartProductsArray(),
  loading: makeSelectLoading(),
});

export default connect(mapStateToProps)(ItemList);
