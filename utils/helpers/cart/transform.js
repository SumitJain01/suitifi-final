import { omit } from 'ramda';

export default function transform(item) {
  return {
    image: item.images && item.images?.[0],
    ...omit(['shortdescription', 'createdAt', 'updatedAt', 'type', 'images'], item),
  };
}
