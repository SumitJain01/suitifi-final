import React from 'react';
import { getProductCardProps } from 'utils/productModule';
import ProductCard from 'shared/components/ProductCard';
const title = "Others";
export default (item, key) => <ProductCard title={title} {...getProductCardProps({ item, key })} />;
