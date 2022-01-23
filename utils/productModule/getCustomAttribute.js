import { propOr, find, propEq, compose } from 'ramda';

export const getCustomAttributeFromProduct = attributeCode =>
  compose(
    propOr(false, 'value'),
    find(propEq('attribute_code', attributeCode)),
    propOr([], 'customattributes'),
  );
