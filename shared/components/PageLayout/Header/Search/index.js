import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch';
import dataLayer from 'lib/gtmDataLayer';
import makeClevertap from "lib/makeClevertap";
import ProductCard from 'shared/components/ProductCard';
import Flex from 'shared/components/Flex';
import Gap from 'shared/components/Gap';
import ScrollLock from 'shared/components/ScrollLock';
import { addToWishlist, removeFromWishlist } from 'containers/Cart/redux/actions';
import { makeSelectCurrency } from 'containers/Global/redux/selectors';
import { makeSelectWishlist } from 'containers/Cart/redux/selectors';
import { makeSelectUserId } from 'containers/Auth/redux/selectors';
import config from 'config/env';

const clevertap = makeClevertap();

const Wrapper = styled.div`
@media only screen and (max-width: 767px){
  padding:0rem;
}
  padding: 1rem 8%;
  padding-top: 4rem;
  margin: 2% auto;
  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px 6px;
  /* overflow: auto; */

  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px 18px;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    hits: [],
    loading: false
  }

  componentDidMount() {
    this.searchClient = algoliasearch(
      `${config.algoliaApp}`,
      `${config.algoliaKey}`
    );
    this.index = this.searchClient.initIndex('pwa-products');
    // if (this.props.searchKey.length == 1) {
    this.index.search({ query: this.props.searchKey }, (err, { hits } = {}) => {
      if (err) {
        return;
      }
      //
      let comboId = 88;
      let comboHits = hits.sort((a, b) => {
        if (a.categories.includes(comboId) && !(b.categories.includes(comboId))) {
          return 1;
        }
        if (!(a.categories.includes(comboId)) && b.categories.includes(comboId)) {
          return -1
        }
        return 0;
      });
      let sortedHits = comboHits.sort((a, b) => {
        if (a.is_in_stock < b.is_in_stock) {
          return 1;
        }
        if (a.is_in_stock > b.is_in_stock) {
          return -1
        }
        return 0;
      });
      this.setState({ hits: sortedHits, loading: false });
    });
    // }
  }

  componentDidUpdate(pP) {
    if ((pP.searchKey !== this.props.searchKey)) {
      this.setState({ loading: true });
      this.index.search({ query: this.props.searchKey }, (err, { hits } = {}) => {
        if (err) {
          this.setState({ loading: false });
          return;
        }
        //
        let comboId = 88;
        let comboHits = hits.sort((a, b) => {
          if (a.categories.includes(comboId) && !(b.categories.includes(comboId))) {
            return 1;
          }
          if (!(a.categories.includes(comboId)) && b.categories.includes(comboId)) {
            return -1
          }
          return 0;
        });
        let sortedHits = comboHits.sort((a, b) => {
          if (a.is_in_stock < b.is_in_stock) {
            return 1;
          }
          if (a.is_in_stock > b.is_in_stock) {
            return -1
          }
          return 0;
        });
        this.setState({ hits: sortedHits, loading: false });
      });
      dataLayer.push({
        event: 'search',
        searchTerm: `${this.props.searchKey}`
      });
    }
    if(this.props.searchKey && this.state.hits.length == 0){
      dataLayer.push({
        event: 'noProductsFound',
        userId: this.props.userId ? this.props.userId : undefined,
        searchTerm: `${this.props.searchKey}`,
      });
    }
      
  }

  Hits = ({ hits }) => {
    const newStyles = this.props.isNewSearchUI ? {
      marginTop: '1.5rem', marginBottom: '1.5rem'
    } : {};
    return (
      <>
        {this.props.searchKey.length ?
        this.state.loading ?
          <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%' }}>{'Loading...'}</div>
          :
          hits.length ? <Wrapper isNewSearchUI={this.props.isNewSearchUI}>
            {hits.map(product => {
              return (
                this.props.isNewSearchUI
                ? <ProductListItem item={product} close={this.props.closeSearch} />
                : <ProductCard product={product} hideActions />
              );
            })}
          </Wrapper> : <div style={{ marginTop: '3rem', textAlign: 'center', width: '100%', ...newStyles }}>{'No products found'}</div>
        :
        <div style={{ marginTop: '3rem' }}>{''}</div>}
      </>
    );
  }

  render() {
    return (
      <Flex className="ais-InstantSearch" align="center" direction="column">
        <this.Hits hits={this.state.hits} />
        <Gap h="10%" />
        <ScrollLock />
      </Flex>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch),
});

const mapStateToProps = createStructuredSelector({
  currency: makeSelectCurrency(),
  wishlist: makeSelectWishlist(),
  userId: makeSelectUserId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
