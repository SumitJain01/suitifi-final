import { pick, propOr, compose, toPairs, map, join } from 'ramda';
import { defaultWhen, isEmptyString } from 'ramda-adjunct';
import config from 'config/env';
import { streetRegex } from 'lib/validation';
export function addressToMageFormat(addressObject) {
  if (!addressObject) {
    return false;
  }
  const {
    id,
    firstname,
    lastname,
    email,
    phone,
    telephone,
    address1,
    address2 = '',
    city,
    region,
    postcode,
    country_id,
    save_in_address_book,
    street,
  } = addressObject;
  if (id) {
    return {
      id,
      region: propOr(region, 'region', region),
      country_id,
      street: [ street[0].replace(streetRegex, ' ')] || [
        address1.replace(streetRegex, ' '), address2.replace(streetRegex, ' '),
      ],
      postcode,
      city,
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email,
      telephone: phone || telephone,
    };
  }
  return {
    region: propOr(region, 'region', region),
    country_id,
    street: [ street[0].replace(streetRegex, ' ') ] || [
      address1.replace(streetRegex, ' '), address2.replace(streetRegex, ' '),
    ],
    postcode,
    city,
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    email,
    telephone: phone || telephone,
    save_in_address_book,
  };
}

function prepareOrderItems(items) {
  return items.filter((item) => {
    if (item.product_type === 'configurable' && !item.parent_item) {
      return false;
    }
    return true;
  });
}

function prepareGtmItems(items , itemId) {
  for (let i = 0; itemId && i < items.length; i++) {
    items[i]['old_productid'] = itemId[i]
  }
  return items.map(item => ({
    id: item.sku ?? "",
    name: item.name ?? "",
    price: item.parent_item ? item.parent_item.base_price_incl_tax : item.price,
    brand: config.brandTitle,
    quantity: item.qty_ordered ?? 0,
  }));
}

export function makeConsumableOrderResponse(orderData , itemsId) {
  const keysToPickForTransformingOrderData = [
    'base_grand_total',
    'grand_total',
    'coupon_code',
    'base_subtotal',
    'base_subtotal_incl_tax',
    'discount_amount',
    'base_tax_amount',
    'billing_address',
    'customer_email',
    'order_email',
    'shipping_amount',
    'shipping_description',
    'shipping_incl_tax',
    'total_item_count',
    'total_qty_ordered',
    'extension_attributes',
    'items',
    'status',
    'entity_id',
    'base_currency_code',
    'total_item_count',
    'increment_id',
    'payment',
    'created_at',
  ];
  const picked = pick(keysToPickForTransformingOrderData, orderData);
  const items = prepareOrderItems(picked.items);
  const res = {
    ...picked,
    items,
    gtmProds: prepareGtmItems(items , itemsId),
  };
  return res;
}

export const getTrackingDataFromQuery = (query = '') => {
  const keysToObserve = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'keyword', 'gclid'];
  return compose(defaultWhen(isEmptyString, 'no-campaign'), join(','), map(join(':')), toPairs, pick(keysToObserve))(query);
};
export function  numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};