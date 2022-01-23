import { getCustomAttributeFromProduct } from 'utils/productModule';
import { merge } from 'ramda';

export default product => merge({
  meta: {
    specialPrice: getCustomAttributeFromProduct('special_price')(product),
    displayTag: getCustomAttributeFromProduct('tags')(product),
  },
}, product);
