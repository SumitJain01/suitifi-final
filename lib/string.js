/* eslint-disable */
export const prettify = (str) => {
  return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
  });
}
/* eslint-enable */
