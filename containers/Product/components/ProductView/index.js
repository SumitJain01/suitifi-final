import React, { Component } from 'react';
import VisibilitySensor from 'hoc/VisibilitySensor';
import parse from 'url-parse';
import {
  __,
  propEq,
  find,
  sort,
  map,
  includes,
  filter,
  prop,
  compose,
  split,
  last,
  ascend,
  nth,
  groupBy,
  propOr,
} from 'ramda';
import makeClevertap from 'lib/makeClevertap';
import dataLayer from 'lib/gtmDataLayer';
import config from 'config/env';
import { isTruthy, noop, isNonEmptyArray } from 'ramda-adjunct';
import { getCustomAttributeFromProduct } from 'utils/productModule';
import htmlToText from 'utils/helpers/product/htmlToText';
import itemRenderer from 'utils/helpers/products/productSliderItemRenderer';
import PropTypes from 'prop-types';
import { routerPropTypes } from 'utils/PropTypes';
import Meta from 'shared/components/SeoMeta/Meta';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import ReviewList from 'shared/components/ReviewList';
import Disclaimer from 'containers/Product/components/Disclaimer';
import cartAdder from 'utils/helpers/cart/cartAdder';
import SlickSlider from 'shared/components/SlickSlider';
import Gap from 'shared/components/Gap';
import H2 from 'shared/components/Html/H2';
import Icon from 'react-icons-kit';
import { chevronRight, chevronLeft } from 'shared/components/Icons';
import Breadcrumb from 'shared/components/BreadcrumbUI/Breadcrumb';
import BreadcrumbLink from 'shared/components/BreadcrumbUI/BreadcrumbLink';
import Breadcrumbend from 'shared/components/BreadcrumbUI/Breadcrumbend'
import BreadcrumbLabel from 'shared/components/BreadcrumbUI/BreadcrumbLabel';
import { BreadcrumbRightarrow } from 'shared/components/SVGIcons';
import Link from 'next/link'
import { navigationClick } from 'lib/analytics/datalayer';
import { makePriceForDataLayer } from 'utils/helpers/trackingHelpers';
import ProductDetails from '../ProductDetails';
import ProductAttributes from "../ProductAttributes";
import CmsItem from '../CmsItem';
import ProductActions from '../ProductActions';
import detectMobile from 'utils/helpers/mobileDetect';

const isMobile = detectMobile();


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      onClick={onClick}
    >
      <Icon icon={chevronRight} size="1.5rem" style={{ color: 'gray' }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} SlickPrevArrowCustom`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <Icon icon={chevronLeft} size="1.5rem" style={{ color: 'gray' }} />
    </div>
  );
}

class ProductView extends Component {
  clevertap = makeClevertap();

  constructor(props) {
    super(props);
    this.state = {
      floating: isMobile,
      qty: 1,
      productCatData: false,
      packedQuantity: false,
      subTitle: false
    };    
    this.isServer = props.isServer;
  }

  explicitlySetFloatingToFalse = () => {
    this.setState({
      floating: false,
    });
  }
  
  findProductCategory = (product, productCategories) => {
    let prodcutCategoryNumber = null;
    let productCategoryDt = null;
    let subTitleLocal = null;
    let packedQuantityLocal = null
    product.customattributes.map((attrib) => {
      if (attrib.attribute_code === "breadcrumb_category") {
        prodcutCategoryNumber = attrib.value;
      }
      productCategories.map((category) => {
        if(prodcutCategoryNumber == category.id){
          productCategoryDt = category;
        }
        category.children_data.map((subCategory) => {
          if(prodcutCategoryNumber == subCategory.id){
            productCategoryDt = subCategory;
          }
        })
      })
      this.setState({ productCatData:productCategoryDt},() => {})
      if(attrib.attribute_code === "sub_title") {
        subTitleLocal = attrib.value;
        this.setState({ subTitle:subTitleLocal })
      }
      if(attrib.attribute_code === "weight_when_packed") {
        packedQuantityLocal = attrib.value;
        this.setState({ packedQuantity:packedQuantityLocal })
      }
    })

 
  }

  getCategories = (product, categories) => {
    this.findProductCategory(product, categories.children_data);
  }

  pushCleverTapAndGAData() {
    const {  id: productId, name, price, categories, sku, slug, special_price } = this.props.product;
    try {
      const id = getCustomAttributeFromProduct('old_productid')(this.props.product) || productId;
      localStorage.setItem('id', JSON.stringify(id))
      if (this.props.product) {
        dataLayer.push({
          event:"productView",
          ecommerce: {
            detail: {
              products: [
                {
                  id: sku?? "",
                  name: name ?? "",
                  price: makePriceForDataLayer(special_price||price),
                  brand: config.brandTitle,
                },
              ],
            },
          },
        });
      }

      const address = this.props.addresses &&
        this.props.addresses.filter(obj => {
          return obj.default_shipping === true;
        });
          
      this.clevertap.profile.push({
        Site: {
          last_viewed_product: name
        }
      });

      const params = parse(window.location.href, true).query
      let utmParams = params
      if (utmParams.cartState) {
        delete utmParams.cartState;
      }
      if (utmParams.gclid || utmParams.fbclid) {
        utmParams.advertiserId = utmParams.gclid || utmParams.fbclid;
        utmParams.gclid ? delete utmParams.gclid : delete utmParams.fbclid;
      }

      this.clevertap.event.push('productView', {
        platform: "mewebsite",
        timestamp: new Date().getTime(),
        quantity: this.props.quantity,
        pageTitle: process.browser ? document.title : null,
        cartAmount: this.props.quantity === 0 ? 0 : this.props.totals.subtotal_incl_tax,
        productName: name,
        categoryName: this.props.categoryName,
        productShortName: `${name.slice(0, 25)}...`,
        productId: id,
        ...(this.props.user && {walletBalance: this.props.walletBalance}),
        ...utmParams,
        ...this.props.trackingData,
        price: Number(price),
        ...(this.props.user && {
          userName:
          this.props.user.firstName +
          " " +
          this.props.user.lastName,
          email: this.props.user.email,
          phone: this.props.user.phone,
          gaUserId: this.props.user.id,
        }),
        ...(address && {
          pincode: Number(address[0].postcode),
          city: address[0].city,
        }),
        clickLabel:name,
        clickSource: slug,
        clickURl: `https://thedermaco.com/product/${slug}`,            
      });
          
      this.clevertap.profile.push({
        Site: {
          productUrlProp: `https://thedermaco.com/product/${slug}`,
          productNameProp: name,
          shortnameProp: `${name.slice(0, 25)}...`,
          lastViewedCategory: categories.join("|")
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const { product, categories } = this.props;
    this.pushCleverTapAndGAData();
    this.getCategories(product, categories);
    this.cmsContent = [];
    this.makeCmsContent();
  }

  componentDidUpdate(pP) {
    if (this.props.product !== pP.product) {
      this.cmsContent = [];
      this.makeCmsContent();
    }
  }

  breadcrumbsClickHandler = (event, newPageURL) => {
    navigationClick(new URL(newPageURL).pathname);
    return true;
  }

  render() {
    const {
      product,
      addToCart,
      related,
      currency,
      className,
      reviews,
      recent,
      upsells,
      crossSells,
      isModal,
    } = this.props;
    const { floating } = this.state;
    const carouselCount = isMobile ? 3 : 4;
    if (!product) {
      return <div>error</div>;
    }

    const filteredRecent = [], uniqueObject = {};
    recent.forEach(product => {
      const Sku = product.sku;
      uniqueObject[Sku] = product;
    })
    Object.keys(uniqueObject).forEach(key => {
      filteredRecent.push(uniqueObject[key]);
    })
    
    const sliderSettings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots:true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false
          },
        },
      ],
    };

    return (
      <div className={className} key={product.slug}>
        <Meta
          metaTitle={htmlToText(getCustomAttributeFromProduct('meta_title')(product) || '<div></div>')}
          metaDescription={htmlToText(getCustomAttributeFromProduct('meta_description')(product) || '<div></div>')}
          url={htmlToText(getCustomAttributeFromProduct('live_url')(product) || '<div></div>')}
          ogType="article"
          imageUrl={product.images?.[0]}
          reviewCount={product.review_count}
          createdAt={product.createdAt}
          image={product.image}
          averageRating={product.avg_rating_percent}
          Sku={product.sku}
        />
            <Gap h="0.3rem"/>

          { (this.state.productCatData &&  this.props.product) &&
              <Breadcrumb
                pixelsize={'max'}
                width={768}
              > 
                <Link prefetch={false} href="/" passHref>
                  <BreadcrumbLink 
                    onClick={(event) => this.breadcrumbsClickHandler(event, location.origin)}
                  >
                    {'Home'}
                  </BreadcrumbLink>
                </Link>
                <BreadcrumbRightarrow />
                  <Link prefetch={false} href={`/products`} passHref>
                    <BreadcrumbLink 
                      onClick={(event) => this.breadcrumbsClickHandler(event, `${location.origin}/products`)}
                    >
                      {this.state.productCatData.url_key}
                    </BreadcrumbLink>
                  </Link>
                <BreadcrumbRightarrow/>
                <Breadcrumbend>{`${this.props.product.name}`}</Breadcrumbend>
              </Breadcrumb>
            }
        
        <ProductDetails
          upsell={false}
          currency={currency}
          isMobile={isMobile}
          product={product}
          reviews={reviews}
          floating={floating}
          productCatData={this.state.productCatData}
          setFloatingToFalse={this.explicitlySetFloatingToFalse}
          addToCart={(args) => {
            addToCart(args);
          }}
          packedQuantity={this.state.packedQuantity}
          subTitle={this.state.subTitle}
        >
          <VisibilitySensor
            onChange={visible => this.setState({ floating: !visible })}
            style={{ width: '100%', height: '2px' }}
            partialVisibility={false}
          >
            <div />
          </VisibilitySensor>
        </ProductDetails>

        {isModal ? null : 
          <CmsDiv style={{ padding: '0 4px', maxWidth: '100vw', overflowX: 'hidden' }}>
            {
              isNonEmptyArray(this.cmsContent) && this.cmsContent.filter(isTruthy).map(({ title, content }) => <CmsItem title={title} cmsData={this.cmsContent} product={product.id} content={content} collapse={title?.includes('Complete Ingredients') || title?.includes('Patch Testing Guide')} />)
            }
            {isNonEmptyArray(this.cmsContent) && <Disclaimer />}
            {
              isNonEmptyArray(this.cmsContent) && <ProductAttributes attributes={product.customattributes} />
            }
            {
              reviews && <ReviewList avg_rating_percent={reviews.avg_rating_percent} data={reviews} productId={product.id} productName={product.name} openModal={this.props.openModal} />
            }
            {
              !isMobile && isNonEmptyArray(upsells) && <LazyLoad offset={100}>
                <H2 className="titleProductSlider">More Options</H2>
                {
                  upsells.length < carouselCount ? (<div className="ProductGrid_WithoutSlider">{upsells.map(itemRenderer)}</div>) : (
                    <SlickSlider
                      settings={sliderSettings}
                      items={upsells}
                      itemRenderer={itemRenderer}
                    />)
                }
              </LazyLoad>
            }
            {isMobile? <Gap h="2rem" />:null}
            {
              isNonEmptyArray(crossSells) && <LazyLoad once offset={100}>
                <H2 className="titleProductSlider">Frequently Bought Together</H2>
                {crossSells.length < carouselCount ? (<div className="ProductGrid_WithoutSlider">{crossSells.map(itemRenderer)}</div>) : (
                  <SlickSlider
                    settings={sliderSettings}
                    items={crossSells}
                    itemRenderer={itemRenderer}
                  />)}
              </LazyLoad>
            }
            {
              isNonEmptyArray(related) && <LazyLoad once offset={100}>
                <H2 className="titleProductSlider">Related Products</H2>
                {related.length < carouselCount ? (<div className="ProductGrid_WithoutSlider">{related.map(itemRenderer)}</div>) : (
                  <SlickSlider
                    settings={sliderSettings}
                    items={related}
                    itemRenderer={itemRenderer}
                  />)}
              </LazyLoad>
            }
            {
              isNonEmptyArray(filteredRecent) && <LazyLoad once offset={100}>
                <H2 className="titleProductSlider">Recently Viewed</H2>
                {
                  filteredRecent.length < carouselCount ? (<div className="ProductGrid_WithoutSlider">{filteredRecent.map(itemRenderer)}</div>) : (
                    <SlickSlider
                      settings={sliderSettings}
                      items={filteredRecent}
                      itemRenderer={itemRenderer}
                    />)
                }
              </LazyLoad>
            }
            {floating &&
              <ProductActions
                floating
                setFloatingToFalse={() => this.setState({ floating: false })}
                product={this.props.product}
                snackBar={this.props.snackBar}
                addToCart={(args) => {
                  this.addToCart(args);
                }}
                currency={currency}
                isMobile={isMobile}
                updateQuantity={q => this.setState({ qty: q })}
              />
            }
            <Gap h="1.3rem"/>
            { (this.state.productCatData &&  this.props.product) &&
              <Breadcrumb
                pixelsize={'min'}
                width={769}
              > 
                <BreadcrumbLabel>You are here</BreadcrumbLabel>
                <Link prefetch={false} href="/" passHref>
                  <BreadcrumbLink 
                    onClick={(event) => this.breadcrumbsClickHandler(event, location.origin)}
                  >
                    {'Home'}
                  </BreadcrumbLink>
                </Link>
                <BreadcrumbRightarrow />
                  <Link prefetch={false} href={`/products`} passHref>
                    <BreadcrumbLink 
                      onClick={(event) => this.breadcrumbsClickHandler(event, `${location.origin}/products`)}
                    >
                      {this.state.productCatData.url_key}
                    </BreadcrumbLink>
                  </Link>
                <BreadcrumbRightarrow/>
                <Breadcrumbend>{`${this.props.product.name}`}</Breadcrumbend>
              </Breadcrumb>
            }
          </CmsDiv>
        }
      </div>
    );
  }

  addToCart = () => {
    const {
      props: { product, addToCart },
      state: { qty, variantData },
    } = this;
    cartAdder({
      product,
      addToCart,
      qty,
      variantData,
    });
  };

  makeCmsContent = () => {
    if (this.props.product && process.browser && this.props.product.customattributes.find(attr => attr.attribute_code === 'cms_sequence')) {
      const getAttrNumber = compose(
        last,
        split('_'),
        propOr('', 'attribute_code'),
      );
      const reducer = item => ({
        title: [item?.[0]?.value],
        content: item?.[1]?.value,
      });
      const groupByKeys = compose(
        groupBy(getAttrNumber),
        sort(ascend(compose(nth(1), split('_'), propOr('', 'attribute_code')))), filter(compose(includes('attribute_'), propOr('', 'attribute_code')))
      );

      try {
        const groupedContent = map(reducer)(groupByKeys(this.props.product.customattributes));
        const getSequence = compose(
          split(','),
          propOr('', 'value'),
          find(propEq('attribute_code', 'cms_sequence')),
        );
        this.cmsContent = getSequence(this.props.product.customattributes).map(prop(__, groupedContent));
        this.forceUpdate();
      } catch (e) {
        console.log(e);
        console.error('product doesnt have correct cms response!');
        this.cmsContent = [];
      }
    }
  }
}

const CmsDiv = styled.div`
.html{
  .list-tag{
    position:relative;
  }
  .opinion{
    
    @media only screen and (min-width: 700px){
    position: absolute;
    top: 20%;
    width: 50%;
    right: 0;
    padding: 38px;
    border-radius: 30px;
    background: white;
    box-shadow: -2px 5px 8px -4px #747474;
    font-size: 16px;
    z-index: 9;
    }
  }
}
`;
export default styled(ProductView)`
  h2 {
    text-align: center;
  }
  .related-card {
    padding: 0 4px;
    width: 50%;
  }
  .titleProductSlider {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.text.h2.fontSize};
    line-height: ${({ theme }) => theme.text.h2.lineHeight};
    display: inline-block;
    position: relative;
    margin-top: 1rem;
    padding-bottom: 0.9rem;

    &:after {
      content: "";
      display: block;
      background: ${({ theme }) => theme.general.primaryColor};
      height: 2px;
      position: absolute;
      bottom: 0px;
      width: 25%;
    }
  }
  .ProductGrid_WithoutSlider {
    margin: 0rem 0 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 0;
  } 
  @media only screen and (min-width: 767px) {
    .ProductGrid_WithoutSlider {
      margin: 1rem 0 0 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      padding: 0;
    } 
  }
  @media only screen and (min-width: 1024px) {
    .related-card {
      width: 25%;
      padding: 0 8px;
    }
    padding-top: 1rem;
    margin-bottom: 4rem;
  }
`;

ProductView.propTypes = {
  addToCart: PropTypes.func,
  className: PropTypes.string,
  crossSells: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.object)]),
  currency: PropTypes.exact({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
  // eslint-disable-next-line react/no-unused-prop-types
  getCrossSells: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  getRelated: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  getReviews: PropTypes.func,
  // eslint-disable-next-line react/no-unused-prop-types
  getUpsells: PropTypes.func,
  isMobile: PropTypes.bool,
  isServer: PropTypes.bool,
  openModal: PropTypes.func,
  product: PropTypes.object,
  recent: PropTypes.arrayOf(PropTypes.string),
  related: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  reviews: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  // eslint-disable-next-line react/no-unused-prop-types
  router: routerPropTypes,
  upsells: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

ProductView.defaultProps = {
  addToCart: noop,
  className: '',
  crossSells: [],
  currency: { label: 'INR', value: 1 },
  getCrossSells: noop,
  getRelated: noop,
  getReviews: noop,
  getUpsells: noop,
  isMobile: false,
  isServer: false,
  openModal: noop,
  product: {},
  recent: [],
  related: [],
  reviews: false,
  router: {},
  upsells: [],
};
