import React from 'react';
import { OrderWrapper } from './OrdersUI.styled';
import Header from './components/OrderHeader';
import ProductDetails from './components/ProductDetails';

export default OrderItem;

function OrderItem({ order, isMobile, viewDetails, ...rest }) {
  const orderID = order.increment_id;
  const headerProps = { orderID, isMobile };
  
  function renderProductDetails() {
    return order.items.map(product => {
      const productDetailsProps = getProductDetailsProps(product);
      return (
        <ProductDetails key={product.entity_id} {...productDetailsProps} />
      );
    })
  }

  return (
    <OrderWrapper onClick={viewDetails} id={orderID} {...rest} isMobile={isMobile}>
      <Header {...headerProps} />
      {renderProductDetails()}
    </OrderWrapper>
  );
}

function getProductDetailsProps(product) {
  const {
    name,
    base_price_incl_tax: price,
    qty_ordered: itemsCount,
    image: imgSrc 
  } = product;
  
  return {
    name,
    price,
    itemsCount,
    imgSrc,
  };
}
