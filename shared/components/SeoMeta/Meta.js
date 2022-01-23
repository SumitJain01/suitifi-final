import React, { Fragment } from 'react';
import NextHead from 'next/head';
import { NextSeo, ProductJsonLd } from 'next-seo';
import { makeJsonLd } from 'utils/helpers/seo/index';

const Meta = ({
  metaTitle, metaDescription, url, imageUrl, reviewCount, createdAt, Sku, image, averageRating, ogType,
}) => (
  <Fragment>
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      canonical={url}
      openGraph={{
        // eslint-disable-next-line object-shorthand
        url: url,
        type: ogType,
        locale: 'en_US',
        title: metaTitle,
        description: metaDescription,
        images: [
          {
            url: imageUrl,
            height: 800,
            width: 800,
          },
        ],
        site_name: 'The Derma Co.',
      }}
    />
    <NextHead>
      <meta property="og:image:secure_url" key="og:image:secure_url" content={imageUrl} />
      <meta name="twitter:card" key="twitter:card" content="summary" />
      {metaTitle && <meta name="twitter:title" key="twitter:title" content={metaTitle} /> }
      <meta name="twitter:image" key="twitter:image" content={imageUrl} />
      { metaDescription && <meta name="twitter:description" key="twitter:description" content={metaDescription} />}
      <script
        key="contentSchema"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: makeJsonLd({
            currentUrl: 'https://thedermaco.com/',
            // eslint-disable-next-line object-shorthand
            description: metaDescription,
            pageTitle: metaTitle,
            // eslint-disable-next-line object-shorthand
            imageUrl: imageUrl,
            // eslint-disable-next-line object-shorthand
            url: url,
          }),
        }}
      />
      <ProductJsonLd
        productName={metaTitle}
        images={image}
        description={metaDescription}
        brand="ACME"
        reviews={[
          {
            author: '',
            datePublished: createdAt,
            reviewBody:
            '',
            name: '',
            reviewRating: {
              bestRating: averageRating,
              ratingValue: '5',
            },
          },
        ]}
        aggregateRating={{
          ratingValue: '4.4',
          reviewCount: { reviewCount },
        }}
        offers={{
          price: '119.99',
          priceCurrency: 'USD',
          priceValidUntil: '2020-11-05',
          itemCondition: 'http://schema.org/UsedCondition',
          availability: 'http://schema.org/InStock',
          seller: {
            name: 'Executive Objects',
          },
        }}
        mpn={Sku}
      />
    </NextHead>
  </Fragment>
);
export default Meta;
