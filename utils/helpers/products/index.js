import { filter, __ } from 'ramda';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';

export const filterProductSlugsUsingProductEntities = ({
  productEntities = [],
  worker,
  filterBy,
  sortBy
}) => {
  let filteredPE = filter(worker, productEntities);
  filteredPE = filter((PE) => !(PE.slug.includes("onion-hair-care-ultimate-kit")), filteredPE);
  filteredPE = filter((PE) => !(PE.customattributes.find((attribute) => (
    (attribute.attribute_code == "hide_product_infront") && (attribute.value == 1)
  ))), filteredPE);
  if (filterBy) {
    filteredPE = filter((PE) => PE.categories.includes(filterBy.toString()), filteredPE);
  }
  let PEArray = [];
  for (let product in filteredPE) {
    PEArray.push(filteredPE[product]);
  }
  let sortCriteria = 'is_in_stock';
  let sortDirection = 0;
  if (sortBy) {
    sortCriteria = sortBy.name;
    sortDirection = sortBy.direction
  }
  PEArray.sort((a, b) => {
    let value1 = a[sortCriteria];
    let value2 = b[sortCriteria];
    if (sortCriteria == 'price' && a.special_price) {
      value1 = a.special_price;
    }
    if (sortCriteria == 'price' && b.special_price) {
      value2 = b.special_price;
    }
    if (sortCriteria == 'price') {
      value1 = magePriceStringToNumber(value1);
      value2 = magePriceStringToNumber(value2);
    }
    if (value1 < value2) {
      return sortDirection == 0 ? 1 : -1;
    }
    if (value1 > value2) {
      return sortDirection == 0 ? -1 : 1;
    }
    return 0;
  })
  return PEArray;
}