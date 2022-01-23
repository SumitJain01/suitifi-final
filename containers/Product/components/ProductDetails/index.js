import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { Row, Col } from 'react-styled-flexboxgrid';
import cartAdder from 'utils/helpers/cart/cartAdder';
import Flex from 'shared/components/Flex';
import H1 from 'shared/components/Html/H1';
import Ratings from 'shared/components/Ratings';
import { getImgixImageFromMagentoUrl } from 'utils/productModule';
import { makeImgixParams } from 'shared/components/Image/Imgix';
import Price from '../Price';
import ProductActions from '../ProductActions';
import Description from '../Description';
import Scarcity from '../Scarcity';
import getQty from 'utils/helpers/product/getQty';
import ProductGallery from '../ProductGallery';
import ProductPageSeo from 'lib/seo/ProductPageSeo';
import CertificationsWrapper from 'shared/components/PageLayout/Footer/components/CertificationsWrapper';

const ProdName =styled.div`
color:#1D1D1D;
font-size:1.8rem ;
line-height : 2.1rem;
font-weight:600;
@media only screen and (max-width: 700px){
  font-size: 1.5rem;
}  
`;
const makeImgixUrl = (url, isThumbnail, params = '&auto=compress') => {
  // eslint-disable-next-line no-nested-ternary
  const width = typeof window !== 'undefined' ? (window.innerWidth > 1024 ? window.innerWidth / 2 : window.innerWidth) : 100;
  return getImgixImageFromMagentoUrl(url, makeImgixParams({ width: isThumbnail ? width / 5 : width }) + params);
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      optionsArray: false,
      variantData: false,
    };
  }

  render() {
    if (!this.props.product) {
      return null;
    }
    const {
      props: {
        currency,
        isMobile,
        product: {
          qty,
          images,
          name,
          price,
          special_price,
          // type,
          customattributes,
          is_in_stock,
          id,
          meta: { createScarcity } = {},
        },
        reviews,
        setFloatingToFalse,
      },
      state: {
        optionsArray,
      },
    } = this;
    const scarceQty = createScarcity && getQty(id, qty);
    const desc = customattributes.find(i => i.attribute_code === 'description');
    const shortDesc = customattributes.find(i => i.attribute_code === 'short_description');
    
    return (
      <>
        <ProductPageSeo 
          product= {this.props.product}
          reviews= {this.props.reviews}
          productCatData = {this.props.productCatData}
        />

      <Row className={this.props.className}>
        <Col style={{marginRight:'3rem'}} xs={12} md={5}>
          <ProductGallery
            images={
              images?.map(url => ({
                original: makeImgixUrl(url ?? null, false),
                thumbnail: makeImgixUrl(url ?? null, true),
                originalAlt: (this.props.product.name ?? null) || 'The Derma Co',
                thumbnailAlt: (this.props.product.name ?? null) || 'The Derma Co',
              }))
            }
            key={makeImgixUrl(images?.[0]?.url || null, false)}
          />
        </Col>
        <Col xs={12} md={6}>
          <Wrapper flexDir="column" justify="center" align="center">
           <H1> <ProdName style={{textAlign:'left'}}>{name}</ProdName></H1>
           <SubContent>{this.props?.subTitle} | {this.props?.packedQuantity}</SubContent>
            <Flex className="ReviewBox" wrap="no-wrap" justify="flex-start" align="center">
              { reviews && reviews.avg_rating_percent > 0 && (<a href="#review-list">
                <Ratings
                  avg_rating_percent={reviews.avg_rating_percent}
                />
              </a>)
              }
              { reviews && reviews.count > 0 && <a href="#review-list" className="review-count">( {reviews.count} Verified Reviews )</a>}
            </Flex>
           <div className="price-title" style={{display:"flex", flexDirection:"row"}}><div style={{marginTop:"1px",fontSize:"1.5rem"}}>Price: &nbsp;</div>
            <Price price={price} specialPrice={special_price} currency={currency} />
            </div>
              <Fragment>
                {optionsArray &&
                  optionsArray.map(({ Component, data }, i) => (
                    <Component
                      key={`${i * 1}`}
                      current={this.state.variantData.option_value}
                      options={data}
                      clickHandler={({ value, optionId }) =>
                        this.setState({
                          variantData: {
                            option_id: optionId,
                            option_value: value,
                            product_id: getProductId(
                              value,
                              this.props.product.variantmap,
                            ),
                          },
                        })
                      }
                    />
                  ))}
                <ProductActions
                  floating={false}
                  setFloatingToFalse={setFloatingToFalse}
                  product={this.props.product}
                  addToCart={this.addToCart}
                  currency={currency}
                  isMobile={isMobile}
                  updateQuantity={q => this.setState({ qty: q })}
                />
                {this.props.children}
              </Fragment>
            {
              Boolean(scarceQty) && <Scarcity>
                Hurry! Only {scarceQty} Units Left in Stock!
              </Scarcity>
            }
            
            <Description html={shortDesc ? shortDesc.value : ''} style={{ fontSize: '0.85rem', textAlign: 'justify' }} />
          </Wrapper>
        </Col>
        <Col xs={12}>
          {this.props.upsell}
        </Col>
      </Row>
      </>
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
}

function getProductId(optionId, variantMap) {
  return variantMap.find(i => i[0].includes(optionId))[1];
}

const SubContent = styled.div`
  color:#8A8C8B;
  text-align:left;
  margin-bottom:10px;
  margin-top: -15px;
  font-size:18px;
  @media only screen and (max-width: 700px){
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
.certificate{
  @media only screen and (max-width: 700px){
    margin-left:0px;
    margin-top:10px;
    margin-bottom:10px;
  }
  margin-top: -15px;
  margin-left:-30%;
}
position: sticky;
top: 0;
@media only screen and (max-width: 700px){
  margin:0px 10px;
  margin-top:-10px;
}  
  h1 {
    @media screen and (min-width: 1024px) {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 1024px) {
    
    .pdp_image{
      margin-bottom:3%;
      width:100%;
      height:auto;
    }
  }
`;

export default styled(ProductDetails)`
  text-align: center;
  max-width: 100%;
  margin: 0;
  @media only screen and (max-width: 767px){
    margin-bottom:10px;
  }
  .price-title{
    font-weight:600;
    text-align:left;
    color:#279989;
    margin-top:10px;
    @media only screen and (max-width: 767px){
      margin-top:5px;
      margin-bottom:10px;
    }
  }
  .image-gallery-image img {
    padding: 1.5rem 0rem 3rem;
    @media only screen and (max-width: 767px){
      padding: 0rem 0rem 1rem;
    }
  }

  .ReviewBox {
    a {
      display: inline-block;
      vertical-align: middle;
      line-height: 0.9rem;
    }
  }

  .review-count {
    font-size: 14px;
    display: block;
  }

  .html {
    overflow-x: hidden;
  }

  .pdp_description {
    text-align: left;
  }
  .titleName {
    text-align: left;
    font-size: ${({ theme }) => theme.text.h2.fontSize};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: ${({ theme }) => theme.text.h2.lineHeight};
  }
`;

ProductDetails.propTypes = {
  addToCart: PropTypes.func,
  className: PropTypes.string,
  currency: PropTypes.exact({ label: PropTypes.string, value: PropTypes.number }),
  floating: PropTypes.bool,
  isMobile: PropTypes.bool,
  product: PropTypes.object,
  upsell: PropTypes.bool,

};

ProductDetails.defaultProps = {
  addToCart: noop,
  className: '',
  currency: { label: 'INR', value: 1 },
  floating: false,
  isMobile: false,
  product: {},
  upsell: false,
};
