import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import request from 'lib/request';
import config from 'config/env';
import { closeCart } from 'containers/Cart/redux/actions';
import { makeSelectCartOpen } from 'containers/Cart/redux/selectors';
import detectMobile from 'utils/helpers/mobileDetect';
import HomePage from 'containers/Home/components/Homepage';
import HomeSeo from 'lib/seo/HomeSeo';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, HOMEPAGE_CONTENT_ID } from 'utils/constants/index';
import { makeSelectHomePageCarousels } from 'containers/Home/redux/selectors';

const { apiUrl } = config;

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      homePageBanners: {},
      dealOfDayProducts: null,
      isMobile: null
    }
  }

  
  getDealOfDayProducts = async () => {
    const data = await request(`${apiUrl}/categories/25/products`);
    const products = data.list.entities.products;
    let productsArray = []
    for(let product in products){
      productsArray.push(products[product])
    }
    this.setState({dealOfDayProducts: productsArray },() => {})
  }

  componentDidMount() {
    this.setState({ isMobile: detectMobile() });
    this.getDealOfDayProducts();
    if(process.browser){
      window.onpopstate = event => {
        const cartState = this.props.cartState
        if (cartState) {
          this.props.closeCart()
        }
      }
    }
  }

  render() {
    return <>
      <HomeSeo />
      <HomePage {...this.props} {...this.state} />    
    </>
    ; 
  }
}

const mapDispatchToProps = dispatch => ({
  closeCart: bindActionCreators(closeCart, dispatch),
});

const mapStateToProps = createStructuredSelector({
  cartState: makeSelectCartOpen(),
  homePageCarousels: makeSelectHomePageCarousels()
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
