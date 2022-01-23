import { useMutation } from "@apollo/client";
import { makeSelectIsInert } from 'containers/Cart/redux/selectors';
import { addSimpleProductsToCartMutation } from "GraphQL/Mutations";
import { noop } from 'ramda-adjunct';
import React from 'react';
import { useSelector } from 'react-redux';
import Flex from 'shared/components/Flex';
import CartButton from '../../components/CartButton';


function ActionsRenderer({ className, product, updateLocalCartData }) {
  const isInert = useSelector(makeSelectIsInert(product.id));
  const in_stock = product.is_in_stock || true;

  const [addToCart, { loading:cartLoading, cartError }] = useMutation(addSimpleProductsToCartMutation);
  return (<>
    <Flex
      className={className}
      onClick={() => {
        in_stock && !isInert ?
          addToCart(
            {
              variables: {
                cartId: JSON.parse(localStorage.getItem('guestCartId')),
                sku: product.sku
              },
            }
          ).then(res => {
            updateLocalCartData({ cartId: JSON.parse(localStorage.getItem('guestCartId')), items: res?.data?.addSimpleProductsToCart?.cart?.items })
            localStorage.setItem(
              "items",
              JSON.stringify(res?.data?.addSimpleProductsToCart?.cart?.items)
            );
          }) : noop
      }}
    >
      <CartButton productData={product} loader={cartLoading} />
    </Flex>
  </>
  );
}

export default ActionsRenderer;


