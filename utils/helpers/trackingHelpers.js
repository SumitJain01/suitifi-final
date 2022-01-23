import { magePriceStringToNumber } from 'utils/helpers/products/prices';

export function makePriceForDataLayer(price) {
  let priceStringWithDecimal = '';
  try {
    priceStringWithDecimal = magePriceStringToNumber(price).toFixed(2);
  } catch (error) {
    console.error('Error Converting Price To DataLayer Supported Format');
  }
  return priceStringWithDecimal;
}