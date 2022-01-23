import { prop, compose, find, propEq } from 'ramda';
import config from 'config/env';

export default compose(
  str => `https://honasa-tdc-staging.imgix.net${str}`,
  prop('value'),
  find(propEq('attribute_code', 'image')),
  prop('customattributes'),
);
