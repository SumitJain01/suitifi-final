import config from 'config/env';

export * from './getProductCardProps';
export * from './getCustomAttribute';

export const getImgixImageFromMagentoUrl = (url = '', params = '') => `${url}${params}`;
