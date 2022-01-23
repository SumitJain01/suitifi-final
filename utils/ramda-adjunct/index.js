
import { path, compose } from 'ramda';
import { defaultWhen, isFalsy } from 'ramda-adjunct';

export const safePath = defaultValue => pathArray => compose(defaultWhen(isFalsy, defaultValue), path(pathArray));
export const tapWithLogging = (...x) => console.log(...x) || x;
