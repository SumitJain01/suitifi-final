import React, { useState, useEffect } from 'react';
import makeClevertap from 'lib/makeClevertap';
import { renderPageContent } from 'utils/helpers/contentful';
import LazyLoad from 'react-lazyload';
import Wrapper from '../Wrapper';
import Gap from 'shared/components/Gap';
import ProductSlider from 'containers/Home/components/ProductSlider';
import ContentfulPageSeo from 'lib/seo/ContentfulPageSeo';

const clevertap = makeClevertap();

function ContentfulPage({
  pageData: {
    title: pageTitle,
    metaTitle,
    metaDescription,
    pageContent,
  },
  user,
  preorders,
  productEntities,
}) {

  const [FilteredRecentProducts, setFilteredRecentProducts] = useState([]);
  const [isMobile, setisMobile] = useState(true);

  function findRecentOrderedProducts() {
    let recentOr = [];
    preorders.map(slug => {
      recentOr.push(productEntities[slug]);
    })
    setFilteredRecentProducts(recentOr);
  }

  useEffect(() => {
    if (preorders) {
      findRecentOrderedProducts();
    }
    if (window.innerWidth > 768) {
      setisMobile(false);
    }
  }, preorders, isMobile);


  useEffect(() => {
    clevertap.event.push('offerPageVisited', {
      PageTitle: pageTitle,
      id: user.id,
      Phone: user.phone,
      Email: user.email,
      Date: new Date(),
    });
  }, []);


  return (
    <Wrapper>
      <ContentfulPageSeo title={metaTitle} metaDescription={metaDescription}/>
      {renderPageContent({ pageTitle, pageContent })}
      <Gap h="1.5rem" />
      {
        preorders && pageTitle == 'wow Wednesday offer page/ Weekly' && FilteredRecentProducts.length > 0 ?
          <section style={{ padding: '0 2vw' }}>
            <LazyLoad>
              <ProductSlider
                style={{ marginTop: '1.5rem' }}
                title={"Recent Orders"}
                description={"Here Are All The Products You've Previously Purchased."}
                products={FilteredRecentProducts}
                isMobile={isMobile}
              />
            </LazyLoad>
          </section> :
          null
      }
    </Wrapper>
  );
}

export default ContentfulPage;
