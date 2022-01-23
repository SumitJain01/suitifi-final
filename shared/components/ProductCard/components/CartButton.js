import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { noop } from 'ramda-adjunct';
import Button from 'shared/components/Button';
import StockNotifier from 'shared/components/StockNotifier';
import { makeSelectIsInert } from 'containers/Cart/redux/selectors';
import { makeSelectInStockData } from 'containers/Products/redux/selectors';

export default function CartButton({
  showIcon = true, clickHandler, productData, isPDP, disabled = false,loader, ...rest
}) {
  const isInert = useSelector(makeSelectIsInert(productData.id));
  const IsInStock = useSelector(makeSelectInStockData(productData.id));
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const onClick = useCallback(() => {
    setTimeout(clickHandler, 0);
    setClicked(true);
  });

  useEffect(() => {
    let isMobile;
    if(process.browser) {
      isMobile = window.innerWidth < 768;
    }
    setIsMobile(isMobile);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isInert && clicked) {
        setClicked(false);
      }
    }, 1000);
  }, [isInert, clicked]);

  const InStockButton = () => (
    <Button onClick={isInert ? noop : onClick} className="ProductCard_CartButton" loading={clicked || loader} disabled={isInert || clicked || disabled} {...rest}>
      {!isPDP && <>
        <span className="addTocart_mobile">+ Add</span>
        <span className="addTocart_desktop">Add To Cart</span>
      </>}
      {isPDP && <span >Add To Cart</span>}
    </Button>
  )
  const in_stock =  productData.is_in_stock || true;
  const qty = productData.qty || 500;
  return  in_stock && qty != 0? 
      <InStockButton /> :
      <StockNotifier productData={productData} showIcon={showIcon} isMobile={isMobile} {...rest}/>
}
