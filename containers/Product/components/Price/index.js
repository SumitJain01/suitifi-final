import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Flex from 'shared/components/Flex';
import { makePriceWithCurrency } from 'utils/helpers/products/prices';
import { calculateDiscountPercent } from 'utils/helpers/price';

function Price({
  price, specialPrice, currency, className,
}) {
  return (
    <Flex align="center" justify="flex-start" className={className}>
    <table>
      {
        (specialPrice !== price && specialPrice !== undefined) 
        ?
        <tc className="price special">
          ₹{specialPrice}
        </tc>
        :
        <tc className="price">
          ₹{price}
        </tc>
      }

      {
        (specialPrice !== price && specialPrice !== undefined) 
        ? 
        <tc className={cx({ slashed: price, price: true })}>
          {makePriceWithCurrency(currency)(price)}
        </tc>
        : 
        null
      }

      {
        (specialPrice != null) 
        ?
        <tc className="price__discount">
          ({calculateDiscountPercent(price, specialPrice)}% off)
        </tc>
        : 
        null
      }
    </table>
    </Flex>
  );
}

export default styled(Price)`
 margin: 0rem;
  .price {
    color: #1D1D1D;
    font-size: 1.5rem;
    font-weight: bold;

    &.slashed {
      text-decoration: line-through;
      font-size: 0.9rem;
      font-weight: bold;
      padding: 0 1em;
      color: #B4B4B4;
    }
  }

  .price__discount {
    color: #FF0000;
    font-size: 1rem;
    font-weight: bold;
  }
`;

Price.propTypes = {
  price: PropTypes.string,
  specialPrice: PropTypes.string,
};
