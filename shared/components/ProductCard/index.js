import React, { useEffect } from 'react';
import Link from 'next/link';
import dataLayer from 'lib/gtmDataLayer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { getCustomAttributeFromProduct } from 'utils/productModule';
import { getPDPRouteFromProduct } from 'utils/helpers/product';
import { addToCart, updateLocalCartData } from 'containers/Cart/redux/actions';
import ImageRenderer from './renderers/ImageRenderer';
import ContentRenderer from './renderers/ContentRenderer';
import ActionsRenderer from './renderers/ActionsRenderer';
import Wrapper from './styled/Wrapper';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';
import VisibilitySensor from 'hoc/VisibilitySensor';
import detectMobile from 'utils/helpers/mobileDetect';
const isMobile = detectMobile();

function ProductCard({ product, addToCart,updateLocalCartData ,isPLP=false, ...props}) {

  let customStyle = null;

  customStyle = (isPLP && isMobile) ? { border:'solid 0.1rem rgba(0,0,0,0.1)', gridGap:'0rem', margin: '0', borderRadius:'0' } : null ;
  const { id, slug } = product;
  const is_in_stock = true;
  const images = product?.image?.url;
  let displayTag = getCustomAttributeFromProduct('tags')(product) || null
  const onChange = (isVisible, product) => {
    if (isVisible) {
        const eventProperties = {
          ecommerce: {
            currencyCode: "INR",
              impressions: [
                {
                  id: product.sku,
                  name: product.name,
                  price : product.special_price ?  product.special_price : product.price,
                  brand : "Thedermaco",
                  position: product.position,
                },
              ],
            
          },
        };
        dataLayer.push({
          event: "productImpressions",
          ...eventProperties,
        });     
    }
  }
  return (
    <VisibilitySensor onChange={(isVisible) => {
      onChange(isVisible, product)
    }
    }>
    <Wrapper style={customStyle}>
      <div className="ProductCard_Wrapper_DisplayArea">
        <Link prefetch={false} href={getPDPRouteFromProduct({ slug, id })}>
          <a 
            role="presentation" 
            onClick={() => dataLayerFn(product, props.position, 'productList')}
          >
            <ImageRenderer 
              images={images} 
              isMobile={isMobile}
            />
          </a>
        </Link>
      </div>
      <div className="uniquewhite">
        <ContentRenderer 
          {...product}
          product={product} 
        />
      </div>
      <ActionsRenderer
        className="primary"
        product={product}
        addToCart={addToCart}
        updateLocalCartData={updateLocalCartData}
      />
      <div className="tagsName" >
        {displayTag && is_in_stock ?
          (<div className="tag" >{displayTag.replace('-', ' ')}</div>)
          :
          (!is_in_stock && (<div className="tag out-of-stock">Out of stock</div>))
        }
      </div>
    </Wrapper>
    </VisibilitySensor>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  updateLocalCartData: bindActionCreators(updateLocalCartData, dispatch),
});

ProductCard.propTypes = {
  addToCart: PropTypes.func,
  product: PropTypes.object,
};

ProductCard.defaultProps = {
  addToCart: noop,
  product: {},
};

export default connect(null, mapDispatchToProps)(ProductCard);

function dataLayerFn(product, position, list) {
  const {
    name, price, special_price, categories, sku,
  } = product;
  try {
    const id = getCustomAttributeFromProduct('old_productid')(product) || product.id;
    dataLayer.push({
      event: 'productClick',
      ecommerce: {
        click: {
          actionField: {
            list,
            action:"click"
          },
          products: [
            {
              id: sku ?? "",
              name: name ?? "",
              price:parseFloat(magePriceStringToNumber(special_price||price)).toFixed(2),
              brand: 'TDC',
              category: categories.join('/'),
              position: position ?? 0,
            },
          ],
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
}