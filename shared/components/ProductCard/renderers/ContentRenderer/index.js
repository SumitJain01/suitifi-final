import React from 'react';
import cx from 'classnames';
import Flex from 'shared/components/Flex';
import Ratings from 'shared/components/Ratings';
import Link from 'next/link';
import { getPDPRouteFromProduct } from 'utils/helpers/product';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';
import { calculateDiscountPercent } from 'utils/helpers/price';

export default function ContentRenderer({
  name, 
  price, 
  special_price, 
  avg_rating_percent, 
  product,
  product: { slug, id }
}) {
  const pricing = product?.price_range?.minimum_price?.final_price?.value;
    return (
    <Flex flexDir="column">
      <Link prefetch={false} href={getPDPRouteFromProduct({ slug, id })} passHref>
        <a role="presentation">
          <div className="title">{name}</div>
          <Ratings avg_rating_percent={avg_rating_percent}/>
          <Flex align="center" justify="center" style={{ width: '100%' }} className="price_margin">
            <div
              className={cx({
                slashed: special_price,
                price: true,
              })}
            >
              ₹{parseInt(magePriceStringToNumber(pricing))}
            </div>
            {special_price && (
              <div className="price special">
                ₹ {parseInt(magePriceStringToNumber(special_price))}
              </div>
            )}
            {special_price && (
              <div className="discount">
                ({calculateDiscountPercent(price, special_price)}% off)
              </div>
            )}
          </Flex>
        </a>
      </Link>
    </Flex>
  );
}