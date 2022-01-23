import dynamic from 'next/dynamic';
import React ,{useEffect}from 'react';
import ContentLoader from 'react-content-loader';
import LazyLoad from 'react-lazyload';
import Flex from 'shared/components/Flex';
import Gap from 'shared/components/Gap';
import Spinner from 'shared/components/Spinner';
import Unpad from 'shared/components/Unpad';
import styled from 'styled-components';
import { homePageCarouselsNames } from 'utils/constants';
import OfferSlider from '../OfferSlider';
import ShopByConcern from '../ShopByConcern';
import { useQuery } from "@apollo/client";
import { loadProductsByCategoryQuery } from "GraphQL/Queries";

const placeholder = 
  <Flex justify="center" style={{ width: '100%'}}>
    <ContentLoader
      speed={2}
      width={300}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#a1a1a1"
    >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
  </Flex>;

const ProductSlider = dynamic(() => import('../ProductSlider')) 
const DealOfDay = dynamic(() => import('../DealOfDay'))
const HappyCustomers = dynamic(() => import('shared/components/HappyCustomers'))

function HomePage({
  className,
  currency,
  isMobile,
  homePageBanners,
  homePageCarousels,
  dealOfDayProducts,
  updateLocalCartData,
}) {
  
  // useEffect(() => {
  //   helpDeskHandler();
  // }, [])

  function compareSliderSort(a,b){
    if(a.position<b.position){
      return -1;
    }else{
      return 1;
    }
  }
  const { error, loading, data } = useQuery(loadProductsByCategoryQuery,{
    variables : { 
      category_id : 2
    }
  });

 

  return (
    <div className={className}>
     {isMobile && <ShopByConcern isMobile={isMobile}/>}
      <Unpad>
        <div className="homePageBanner">
        <OfferSlider isMobile={isMobile} />
        </div>
      </Unpad>
      {!isMobile && <ShopByConcern isMobile={isMobile}/>}
      <section style={{minHeight: '100vh'}}>
        {homePageCarouselsNames && homePageCarouselsNames.map((category, index) => {
          return (
            !data?.products?.items?.length  ? null : (
              (index == 0 || index == 1) ?
              <div style={{minHeight:"200px"}}>
                    <ProductSlider
                      style={isMobile ? {} : {minHeight:"300px",marginTop: '1rem' }}
                      key={index}
                      title={category.name}
                      description={category.description}
                      shopLink={category.shopLink|| '/'}
                      products={data.products.items}
                      currency={category.currency}
                      isMobile={isMobile}
                      />
              </div> :
              <div style={{minHeight:"200px"}}>
              <LazyLoad>
                   <ProductSlider
                      style={isMobile ? {} : {minHeight:"300px",marginTop: '1rem' }}
                      key={index}
                      title={category.name}
                      description={category.description}
                      shopLink={category.shopLink|| '/'}
                      products={data.products.items}
                      currency={category.currency}
                      isMobile={isMobile}
                     />
               </LazyLoad>
             </div>
            )
          )
          }
          )}
      </section>
      <Gap h="1rem" />
      {dealOfDayProducts ? <LazyLoad once placeholder={placeholder}>
        <section>
          <DealOfDay 
            products={dealOfDayProducts && dealOfDayProducts.slice(0,2)} 
            isMobile={isMobile} 
            className="DealOfDay" 
          />
        </section>
      </LazyLoad>
      : null
      }
      
      <LazyLoad once placeholder={placeholder}>
        <HappyCustomers isMobile={isMobile} />
      </LazyLoad>
    </div>
  );
}

export default styled(HomePage)`
  color: ${({ theme }) => theme.colors.darkGray};
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
  .product-wrapper {
    margin: 0 8px;
  }

  h2 {
    color: ${({ theme }) => theme.scheme.accent};
    font-weight: 300;
    font-size: 1.4rem;
    text-align: center;
    display: block;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  h2.title {
    font-size: 1.7rem;
    line-height: 1;
    font-weight: 450;
    color: #1D1D1D;
    font-family: Roboto;
    text-align: center;
  }

  .homePageBanner{
    @media (max-width: 767px){
    min-height: 220px;
    max-width: 100vw;
    height: auto;
    }
    @media (min-width: 767px){
    min-height: 300px;
    }
  }
`;

