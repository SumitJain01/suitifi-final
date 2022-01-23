import React, { useEffect, useState} from 'react';
import request from 'lib/request';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import config from 'config/env';
import styled from 'styled-components';
import Spinner from 'shared/components/Spinner';
import Button from 'shared/components/Button';
import Flex from 'shared/components/Flex';
import Gap from 'shared/components/Gap';
import ContentfulPageSeo from 'lib/seo/ContentfulPageSeo';
import OfferSlider from 'containers/Contentful/components/OfferSlider'
import MainSlider  from 'containers/Contentful/components/MainSlider';
import CountDown from 'containers/Contentful/components/CountDown';
import Wrapper from 'containers/Contentful/components/Wrapper';
import Link from 'next/link';
import { contentfulCategoryId } from 'utils/constants/index';

const ProductCard = dynamic(() => import('shared/components/ProductCard'));
const Feedback = dynamic(() => import('shared/components/HappyCustomers'));
const FAQ = dynamic(() => import('containers/Contentful/components/FAQ'));

function ContentfulPage({ pageData, isMobile, contentfulPage }) {

    const [productEntities, setProductEntities] = useState([]);
    const [countDown, setCountDown] = useState([]);
    const [cmsReview, setCmsReview] = useState([]);
    const [FAQData, setFAQ] = useState([]);
    const [mainSlider, setMainSlider] = useState([]);
    const [offerSlider, setOfferSlider] = useState([]);
    const [topSlider, setTopSlider] = useState([]);
    const [metaTitle, setMetaTitle] = useState([]);
    const [metaDescription, setMetaDescription] = useState([]);

    useEffect(() => {
      pageData.includes.Entry.map((componentData) => {
          if(componentData.sys.contentType.sys.id === "responsiveExternalCarousels"){
            setTopSlider(componentData.fields,() => {});
          } else if(componentData.sys.contentType.sys.id === "offerSlider"){
            setOfferSlider(componentData.fields);
          } else if(componentData.sys.contentType.sys.id === "countdown"){
            setCountDown(componentData.fields);
          } else if(componentData.sys.contentType.sys.id === "responsiveExternalCarousel2"){
            setMainSlider(componentData.fields);
          } else if(componentData.sys.contentType.sys.id === "cmsReviewData"){
            setCmsReview(componentData.fields);
          } else if(componentData.sys.contentType.sys.id === "faq"){
            setFAQ(componentData.fields);
          }
        })
        setMetaTitle(pageData.items[0].fields.metaTitle);
        setMetaDescription(pageData.items[0].fields.metaDescription)  
    },[])

    useEffect(() => {
      async function makeContentfulData(){
        let categoryData = await getCategoryData();
        categoryData.map(async (category) => {
          const data = await request(`https://tdc-nd-api.honasa-staging.net/v1/categories/${category.id}/products`);
          const filteredData = data.list.entities.products && Object.values(data.list.entities.products).filter(itemFilter);
          let structuredData = {};
          structuredData.title = category.name;
          structuredData.position = category.position;
          structuredData.products = filteredData;
          setProductEntities((productEntities => [...productEntities, structuredData]));
        })
      }
      makeContentfulData();
    },[])

    const itemFilter = (item) => {
      if (item.slug.substring(item.slug.length - 2) !== "-1" && Number(item.price) !== 0 && item.is_in_stock && item.qty) {
        return item;
      }
    }

    const getCategoryData = async () => {
        let categoryData = [];
        const categories = await request(`https://tdc-nd-api.honasa-staging.net/v1/categories`);
        categories?.children_data.forEach((category) => {
          if (category.id === contentfulCategoryId[contentfulPage]) {
            categoryData = category.children_data;
          }
        })
        return categoryData;
    }

    const carouselSort = (firstCategory,secondCategory) => {
      if(firstCategory.position<secondCategory.position){
        return -1;
      }else{
        return 1;
      }
    }

    
    return (
      productEntities.length>0 ?
        <div>
          <ContentfulPageSeo title={metaTitle} metaDescription={metaDescription}/>

          <MainSlider
            slider={topSlider.slider}
          />

          <Gap h="1rem" />

          <OfferSlider
            mobileUrl={offerSlider.mobileUrl}
            desktopUrl={offerSlider.desktopUrl}
          />

          {countDown.expiryMessage && <CountDown
            heading={countDown.heading}
            subheading1={countDown.subheading1}
            subheading2={countDown.subheading2}
            subheading3={countDown.subheading3}
            expiryMessage={countDown.expiryMessage}
            startTimePicker={countDown.startTimePicker}
            endTimePicker={countDown.endTimePicker}
          />}

          <Gap h="2.5rem" />

          {
            productEntities.sort(carouselSort).map(({ products, title }, index) => {
                return(
                <LazyLoad>
                    {products?.length > 0 &&
                    <HeadWrap>
                      <Heading>{title}</Heading>
                    </HeadWrap>
                    }
                    <ProductWrapper>
                    {
                    products?.length > 0 
                    ? products.map((product,index) => {
                        return(
                        <ProductCard
                            isPLP={true}
                            product={product}
                            position={index + 1}
                        />
                        )
                    })
                    :
                    null
                    }
                    </ProductWrapper>
                </LazyLoad>
                )
            })        
          }
          
          <LazyLoad>
            <MainSlider
              slider={mainSlider.slider}
            />
          </LazyLoad>
          <LazyLoad>
            <Feedback
              feedbackList={cmsReview.feedbackList}
              isMobile={isMobile}
              isContentful={false}
            />
          </LazyLoad>

          <Gap h="1rem" />

          <LazyLoad>
            <FAQ
              FAQData={FAQData}
            />
          </LazyLoad>

          <Gap h="1rem" />
    
          <LazyLoad>
            <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem" }}>
              <Link prefetch={false} className="shopBtn" href='/products'>
                  <Button>VIEW ALL PRODUCTS</Button>
              </Link>
            </Flex>
          </LazyLoad>

        </div>
        :
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'10px'}}> 
          <Spinner></Spinner>
        </div>
    )
}

const HeadWrap = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    background-color: #2A9989;
    background-size: cover;
    background-size: 100%; 
    background-repeat:no-repeat;
    /* height:100px; */
    /* background-image: url('static/mamaearth/bg_desk.svg'); */
    text-align: center;

    @media only screen and (max-width : 767px){
        /* border-radius:10px 10px 0px 0px; */
        background-repeat:no-repeat;
        background-color: #2A9989;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }
    @media only screen and (min-width: 1024px) {
        /* border-radius: 10px 10px 0px 0px; */
        background-repeat: no-repeat; 
        background-color: #2A9989;
    }
`;

const Heading = styled.div`
@media only screen and (max-width: 768px){
  padding-top:5px;
  padding-bottom: 5px;
  font-size: 16px;
}
    padding-top: 10px;
    padding-bottom: 10px;
    background-size: cover;
    /* background-image: url('https://mamaearthp.imgix.net/wysiwyg/red_tag_desktop2x.png?auto=format'); */
    display: inline-block;
    /* width: 224.9px; */

    color: #FFFFFF;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;

    /* @media only screen and (min-width: 768px) {
        padding-top: 0.25em;
    } */
    @media only screen and (max-width: 768px) {
        /* background-image: url('https://mamaearthp.imgix.net/wysiwyg/red_tag_desktop2x.png?auto=format'); */
        background-repeat: no-repeat;
        
    }
    @media only screen and (max-width : 360px){
        /* background-image:url('https://mamaearthp.imgix.net/wysiwyg/red_tag_mobile2x.png?auto=format'); */
        /* width: 344px; */
        background-repeat: no-repeat;
        width: 63%;
        height: 38px;

      /* background-size: 360px;  */
    }
`;

const ProductWrapper = styled.section`
  margin: 3rem 0 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 4px;
  padding: 0;
  max-width: 1400px!important;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 768px){
    grid-gap: 0px !important;
  
  }
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem 1rem;
  }

  @media screen and (min-width: 1400px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export default ContentfulPage;
