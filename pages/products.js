import React, { Component } from 'react';
import ShopContainer from 'containers/Shop';

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ShopContainer {...this.props} />
    );
  }
}

export default Shop;
