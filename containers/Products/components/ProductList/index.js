/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import Unpad from 'shared/components/Unpad';
import Flex from 'shared/components/Flex';
import Spinner from 'shared/components/Spinner';
import { withRouter } from 'next/router';
import config from 'config/env';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import renderProductListData from 'utils/helpers/products/renderProductListData';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { routerPropTypes } from 'utils/PropTypes';
import { getCustomAttributeFromProduct } from 'utils/productModule';
import { equals, filter, ascend, descend, prop, sortWith } from 'ramda';
import Gap from 'shared/components/Gap';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Select from 'react-select';
import Button from 'shared/components/Button';
import styled from 'styled-components';
import Link from 'next/link';
import Breadcrumb from 'shared/components/BreadcrumbUI/Breadcrumb';
import BreadcrumbLink from 'shared/components/BreadcrumbUI/BreadcrumbLink';
import BreadcrumbLabel from 'shared/components/BreadcrumbUI/BreadcrumbLabel';
import Breadcrumbend from 'shared/components/BreadcrumbUI/Breadcrumbend';
import { BreadcrumbRightarrow } from 'shared/components/SVGIcons';
import ImageCarousel from 'shared/components/ImageCarousel';
import { navigationClick } from 'lib/analytics/datalayer';
import ProductListSeo from 'lib/seo/ProductListSeo';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'utils/constants/index'
import { contentIdMap, catstringDescriptionMap, PLP_BEST_SELLERS_ID, PLP_COMBOS_ID, PLP_TODAYS_DEALS_ID } from 'utils/constants';
import { makeSelectUser } from 'containers/Auth/redux/selectors';
import request from 'lib/request';
import detectMobile from 'utils/helpers/mobileDetect';
import dynamic from 'next/dynamic';
import { magePriceStringToNumber } from 'utils/helpers/products/prices';

const ProductSlider = dynamic(() => import('../ProductSlider'));
const HappyCustomers = dynamic(() => import('shared/components/HappyCustomers'))

let categories = []
class ProductList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      products: [],
      bestSellers: [],
      combos: [],
      todayDeals: [],
      plpBanners: null,
      isMobile: detectMobile(),
      activeFilter: -1,
      productEntities: null,
      productSlugs: null,
      productEntitiesFilter: null,
      productSlugsFilter: null,
      sortBy: null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (equals(nextProps, this.props) && equals(nextState, this.state)) {
      return false;
    }
    return true;
  }

  filterProducts = (item) => {
    if (item.slug.substring(item.slug.length - 2) !== "-1" && Number(item.price) !== 0 && item.is_in_stock && item.qty) {
      return item;
    }
  }

  getCategoryProducts = async (categoryId) => {
    const products = await request(`https://tdc-nd-api.honasa-staging.net/v1/categories/${categoryId}/products`);
    const filteredProductList = products.list.entities.products && Object.values(products.list.entities.products).filter(this.filterProducts);
    return filteredProductList;
  } 
  
  getPLPProducts = async () => {
    const PLPProducts = await this.getCategoryProducts(this.props.categoryId);
    this.setState({ products: PLPProducts });
  }

  getBestSellersProducts = async () => {
    const bestSellerProducts = await this.getCategoryProducts(PLP_BEST_SELLERS_ID);
    this.setState({ bestSellers: bestSellerProducts });
  }

  getCombosProducts = async () => {
    const combosProducts = await this.getCategoryProducts(PLP_COMBOS_ID);
    this.setState({ combos: combosProducts });
  }

  getTodaysDealsProducts = async () => {
    const todaysDealsProducts = await this.getCategoryProducts(PLP_TODAYS_DEALS_ID);
    this.setState({ todayDeals: todaysDealsProducts });
  }

  componentDidMount() {
    this.getPlpBanners();
    this.setFilterCategories();
    this.getPLPProducts();
    this.getBestSellersProducts();
    this.getCombosProducts();
    this.getTodaysDealsProducts();
    this.activeHandler(-1);
    // this.findBestSellers(productSlugsTemp, productEntitiesTemp);
    this.sendImpressionsToGtm();
  }

  componentDidUpdate(pP) {
    if (pP.catString !== this.props.catString) {
      this.getPlpBanners();
      this.getPLPProducts();
      this.sendImpressionsToGtm();
    }
  }

  breadcrumbsClickHandler = (event, newPageURL) => {
    navigationClick(new URL(newPageURL).pathname);
    return true;
  }

  sortByDataLayer = (data) => {
    const eventProperties = {
      userId : this.props.user.id || undefined,
      sortFeature: data?.label,
    };
    dataLayer.push({
      event: 'sortBy',
      ...eventProperties,
    });
  }

  selectChangeHandler = (data) => {
    this.sortHandler(data);
    this.sortByDataLayer(data);
  }

  render() {
    const {
      loading, query: {
        catString
      },
    } = this.props;

    let name = this.props.productCategoryData;
    let productName = name && (name.name.toLowerCase()).charAt(0).toUpperCase() + name.name.slice(1).toLowerCase();
    return (
      <div>
        <ProductListSeo 
          productCategorySchema = {this.props.productCategorySchema}
          productCategoryData = {this.props.productCategoryData}
          metaSchema = {this.props.productCategorySchema?.seo}
        />
        <Unpad> 
          {this.state.plpBanners && this.state.plpBanners.includes && 
            <ImageCarousel plpBanners={this.state.plpBanners} />
          }
        </Unpad>
        <Gap h="0.5rem"></Gap>
        {
          this.props.productCategoryData && 
          <Breadcrumb 
            pixelsize={'max'} 
            width={768}
          >
            <Link prefetch={false} className="previous-section" href="/">
              {/* <BreadcrumbLink>Home</BreadcrumbLink> */}
              <Link prefetch={false} className="previous-section" href="/"><BreadcrumbLink onClick={(event) => this.breadcrumbsClickHandler(event, location.origin)}>Home</BreadcrumbLink></Link>
            </Link>
            <BreadcrumbRightarrow />
            <Breadcrumbend>{productName}</Breadcrumbend>
          </Breadcrumb>
        }
        {<Grid fluid>
          <Row>
            <Col xs={12} sm={8} md={8} style={{ marginTop: 10, alignItems: "center" }} >
              {
                categories.map((item, index) => {
                  return (
                    <StyledButton key={index} onClick={() => this.activeHandler(item.id)} active={this.state.activeFilter == item.id}>

                      {item.name}
                    </StyledButton >
                  )
                })
              }
            </Col>
            <Col xs={12} sm={4} md={4} style={{ marginTop: 10 }}>
              <div style={{ margin: '0rem 0.5rem' }}>
                {<Select

                  options={[
                    { value: { name: 'avg_rating_percent', direction: 0 }, label: 'Rating' },
                    { value: { name: 'sorted_price', direction: 0 }, label: 'Price - High to Low' },
                    { value: { name: 'sorted_price', direction: 1 }, label: 'Price - Low to High' }
                  ]}
                  isClearable={true}
                  isSearchable={false}
                  onChange={this.selectChangeHandler}
                  on
                  placeholder={"Sort By"}
                />}
              </div>
            </Col>
          </Row>
        </Grid>}
       
        { this.state.products && (
          this.state.products.length < 1 
          ? <Empty loading={loading} /> 
          : 
            <section>
              <Gap hrem='1rem'></Gap>
              {renderProductListData({ 
                products: this.state.products
              })}    
            </section>
        )}
        
        {this.state.bestSellers.length > 0 && 
          <ProductSlider
            style={{ marginTop: '1.5rem' }}
            title="Best Selling Products"
            products={this.state.bestSellers}
            isMobile={this.state.isMobile}
          />
        }
        {this.state.combos.length > 0 && 
          <ProductSlider
            style={{ marginTop: '1.5rem' }}
            title="Combo Products"
            products={this.state.combos}
            isMobile={this.state.isMobile}
          />
        }
        {this.state.todayDeals.length > 0 && 
          <ProductSlider
            style={{ marginTop: '1.5rem' }}
            title="Today's Deals"
            products={this.state.todayDeals}
            isMobile={this.state.isMobile}
          />
        }
        <HappyCustomers isMobile={this.state.isMobile} />
        
        {this.props.productCategoryData &&
          <Breadcrumb
            pixelsize={'min'}
            width={769}
          >
            <BreadcrumbLabel>You are here</BreadcrumbLabel>
            <Link prefetch={false} href="/" passHref><BreadcrumbLink>Home</BreadcrumbLink></Link>
            <BreadcrumbRightarrow />
            <Breadcrumbend>{productName}</Breadcrumbend>
          </Breadcrumb>
        }
      </div>
    );
  }

  sendImpressionsToGtm = () => {
    // TODO: gtmProds to work with slug!
    try {
      const products = this.state.productSlugs ? this.state.productSlugs.map(slug => this.state.productEntities[slug]) : [];
      const gtmProds = products.map((prod, i) => ({
        id: getCustomAttributeFromProduct('old_productid')(prod) || prod.id,
        name: prod.name,
        price: prod.price,
        brand: config.brandTitle,
        sku: prod.sku,
        category: prod.categories.join('/'),
        position: i,
        list: this.props.router.query.catString || 'productList',
      }));

      gtmProds.length > 0 && dataLayer.push( //eslint-disable-line
        {
          ecommerce: {
            currencyCode: 'INR',
            impressions: gtmProds,
          },
        });
    } catch (e) {
      console.log(e);
    }
  }

  findBestSellers = (productSlugs, productEntities) => {
    let bestSellers = [];
    productSlugs.map(slug => {
      productEntities[slug].customattributes.map((attribute) => {
        attribute.attribute_code == "tags" && attribute.value == "best-seller" && bestSellers.push(productEntities[slug]);
      })
    });
    this.setState({ bestSellers: bestSellers })
  }

  sortProducts = (productList) => {
    let sortCriteria = 'is_in_stock';
    let sortDirection = 0;
    if (this.state.sortBy) {
      sortCriteria = this.state.sortBy.name;
      sortDirection = this.state.sortBy.direction
    }
     for(let item in productList)
     {
      if(productList[item].special_price){
        productList[item].sorted_price = magePriceStringToNumber(productList[item].special_price)
      }
      else{
        productList[item].sorted_price = magePriceStringToNumber(productList[item].price)
      }
    }
    const sortedProductList =  
     sortWith([sortDirection === 1 ? ascend(prop(sortCriteria)) : descend(prop(sortCriteria))], productList); 
    return sortedProductList;
  }

  filterProductEntities = (localProductEntities, data) => {
    const worker = () => true;
    let filteredProductEntities = filter(worker, localProductEntities);
    filteredProductEntities = filter((PE) => !(PE.slug.includes("onion-hair-care-ultimate-kit")), filteredProductEntities);
    filteredProductEntities = filter((PE) => !(PE.customattributes.find((attribute) => (
      (attribute.attribute_code == "hide_product_infront") && (attribute.value == 1)
    ))), filteredProductEntities);
    filteredProductEntities = filter((PE) => PE.categories.includes(data.toString()), filteredProductEntities);
    return filteredProductEntities;
  }

  sortHandler = (data) => {
    if (data == null) {
      if (this.state.activeFilter != -1) {
        this.state.productSlugs = this.state.productSlugsFilter;
        this.state.productEntities = this.state.productEntitiesFilter;
        this.state.sortBy = null;
        let filteredProductEntities = this.filterProductEntities(this.state.productEntities, this.state.activeFilter);
        let productEntitiesArray = [];

        for (let product in filteredProductEntities) {
          productEntitiesArray.push(filteredProductEntities[product]);
        }

        let sortedSlugs = productEntitiesArray.map((obj) => (obj.slug))

        this.setState({
          productSlugs: sortedSlugs,
          productEntities: filteredProductEntities
        });
        return;
      } else {
        this.setState({
          productEntities: this.state.productEntitiesFilter,
          productSlugs: this.state.productSlugsFilter
        });
        return;
      }
    }
    else {
      this.state.sortBy = data.value;
      let productList = this.state.products;

      productList = this.sortProducts(productList)
      this.setState({ products: productList });
    }
  }

  activeHandler = (data) => {
    this.setState({ ...this.state, activeFilter: data })
    if (data == -1) {
      let productEntitiesArray = [];
      this.setState({
        productEntities: this.state.productEntitiesFilter,
        productSlugs: this.state.productSlugsFilter
      }, () => {
        for (let product in this.state.productEntities) {
          productEntitiesArray.push(this.state.productEntities[product]);
        }
        productEntitiesArray = this.sortProducts(productEntitiesArray)

        let sortedSlugs = productEntitiesArray.map((obj) => (obj.slug))
        this.setState({
          productSlugs: sortedSlugs
        });
      });
    }
    else {
      this.setFilterBy(data);
    }
  }

  setFilterBy = (data) => {

    this.state.productSlugs = this.state.productSlugsFilter;
    this.state.productEntities = this.state.productEntitiesFilter;

    let filteredProductEntities = this.filterProductEntities(this.state.productEntities, data);
    let productEntitiesArray = [];

    for (let product in filteredProductEntities) {
      productEntitiesArray.push(filteredProductEntities[product]);
    }

    productEntitiesArray = this.sortProductEntitiesArray(productEntitiesArray)

    let sortedSlugs = productEntitiesArray.map((obj) => (obj.slug))

    this.setState({
      productSlugs: sortedSlugs,
      productEntities: filteredProductEntities
    });

    return;
  }

  getPlpBanners = async () => {
    let catString = this.props.catString;
    try {
      const banners = contentIdMap[catString] && await request(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${contentIdMap[catString]}`, {}, true)
      this.setState({ plpBanners: banners });
    } catch (err) {
      this.setState({plpBanners: null});
    }
  }


  setFilterCategories() {
    // Get current product category from URL (eg. .../product-category/hair) => hair
    const productCategory = this.props.router.query.catString || '';
    switch (productCategory) {
      case 'hair': {
        categories = [
          { name: 'All', id: -1 },
          { name: 'Hair Oil', id: 40 },
          { name: 'Hair Mask', id: 32 },
          { name: 'Shampoo', id: 39 }, //hair-shampoo 39//shampoo 68
          { name: 'Conditioner', id: 38 },
          { name: 'Serum', id: 76 },
        ];
        break;
      }
      case 'skin': {
        categories = [
          { name: 'All', id: -1 },
          { name: 'Face Wash', id: 51 },
          { name: 'Face Mask', id: 26 },
          { name: 'Face Scrub', id: 81 },
          { name: 'Face Cream', id: 34 },
          { name: 'Face Serum', id: 74 },
          { name: 'Body Lotion', id: 57 },
          { name: 'Body Butter', id: 73 },
        ];
        break;
      }
      case 'beauty': {
        categories = [
          { name: 'All', id: -1 },
          { name: 'Hair', id: 27 },
          { name: 'Face', id: 51 },//51-facewash //there are 7 category for face but not a single consolidated category
          { name: 'Body', id: 58 }
        ];
        break;
      }
      case 'body': {
        categories = [
          { name: 'All', id: -1 },
          { name: 'Body Lotion', id: 57 },
          { name: 'Body Butter', id: 73 }
        ]
        break;
      }
      case 'for-babies': {
        categories = [
          { name: 'All', id: -1 },
          { name: 'Diaper', id: 92 },
          { name: 'Shampoo', id: 3 },
          { name: 'Lotion', id: 16 },
          { name: 'Oil', id: 13 },
          { name: 'Powder', id: 47 }
        ];
        break;
      }
      case 'men': {
        categories = [];
        break;
      }
      case 'pregnancy': {
        categories = [];
        break;
      }
      default: {
        break;
      }
    }
  }
}


function Empty(params) {
  if (params.loading) {
    return (
      <Flex as="aside" className="loader" justify="center">
        <Spinner />
      </Flex>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      &nbsp;No Products Found
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps)(withRouter(ProductList));

ProductList.propTypes = {
  addToWishlist: PropTypes.func,
  categoryName: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  isMobile: PropTypes.bool,
  isServer: PropTypes.bool,
  loadProducts: PropTypes.func,
  productSlugs: PropTypes.arrayOf(PropTypes.string),
  query: PropTypes.object,
  removeFromWishlist: PropTypes.func,
  router: routerPropTypes,
};

ProductList.defaultProps = {
  addToWishlist: noop,
  categoryName: '',
  className: '',
  image: '',
  isMobile: false,
  isServer: false,
  loadProducts: noop,
  productSlugs: [''],
  query: {},
  removeFromWishlist: noop,
  router: routerPropTypes,
};

const PLPHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

const StyledButton = styled(Button)`
  display: inline;
  font-size: .8rem;
  padding: 0.4rem;
  margin: 0.2rem 0.4rem;
  color: #333333;
  border: 1px solid #ccccdd;
  border-radius:4px;
  background-color: ${props => props.active ? "#dbe8e8b8" : "white"};
  &:hover {
    background-color:#dbe8e8;
    color: #333333;
   
  }
  @media screen and (max-width: 768px){
    border-radius:10rem;
    padding:0.8rem 1.2rem;
    margin:0.3rem;
  }
`;