import config from 'config/env';
export const getImgixImageFromUrl = (url, params = '') => `https://honasa-tdc-staging.imgix.net${url.split('catalog/product')[1]}${params}`;
