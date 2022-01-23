import { isString } from 'ramda-adjunct';

export const getProductCardProps = ({ item, key }) => {
  const isSlug = isString(item);
  return {
    position: key + 1,
    key: isSlug ? item : item.id,
    slug: isSlug && item,
    product: !isSlug && item,
  };
};
