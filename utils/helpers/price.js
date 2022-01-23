import { magePriceStringToNumber } from 'utils/helpers/products/prices';

export function calculateDiscountPercent(price, specialPrice) {
  price = parseFloat(magePriceStringToNumber(price));
  specialPrice = parseFloat(magePriceStringToNumber(specialPrice));
  return (
    specialPrice < price && Math.round(((price - specialPrice) / price) * 100)
  );
}