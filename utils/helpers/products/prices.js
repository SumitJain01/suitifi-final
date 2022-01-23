import { multiply, compose } from 'ramda';
import { isNumber } from 'ramda-adjunct';

export function magePriceStringToNumber(price) {
  return typeof price === 'number' ? price : parseInt(`${price?.split(',').join('')}`, 10);
}

export function makeLocaleStringWithCurrency(currency = 'INR') {
  return price => isNumber(price) ? price.toLocaleString(currency === 'INR' ? 'en-IN' : 'en-GB', {
    style: 'currency',
    currency,
  }) : null;
}

export function makePriceWithCurrency(currency) {
  return compose(
    makeLocaleStringWithCurrency(currency.label),
    multiply(currency.value),
    magePriceStringToNumber,
  );
}
