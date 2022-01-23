import React from 'react';
import { isFunction } from 'ramda-adjunct';
import dynamic from 'next/dynamic';
import ListHolder from './styled/ListHolder';

export default function List({
  data = [],
  WrapperComponent = dynamic(() => import('./styled/ListItem')),
  ItemRenderer,
  getKeyFromItem,
  itemKeyTitle = 'item',
}) {
  // TODO: optimise perf using hooks
  const renderListItem = item => (
    item?.product?.price_range?.minimum_price?.final_price?.value && 
    <WrapperComponent key={isFunction(getKeyFromItem) ? getKeyFromItem(item) : (item.id || item)}>
      {isFunction(ItemRenderer) || (ItemRenderer || {}).displayName ? <ItemRenderer {...{ [itemKeyTitle]: item }} /> : item}
    </WrapperComponent>
  );
  return (
    <ListHolder>
      {data.map(renderListItem)}
    </ListHolder>
  );
}
