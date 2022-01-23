import React, { Fragment } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { makeJsonLd } from 'utils/helpers/seo/index';

export default ({ asPath, metaTitle }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="twitter:card" key="twitter:card" content="summary" />
      <meta name="twitter:description" key="twitter:description" content="Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees" />
      <meta key="twitter:title" name="twitter:title" content="Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="format-detection" content="telephone=no" />
      <script
        key="contentSchema"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: makeJsonLd({
            currentUrl: 'https://thedermaco.com/',
            description: "Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees",
            pageTitle: 'Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees',
            url: 'https://thedermaco.com/',
          }),
        }}
      />
    </Head>
    <DefaultSeo
      title={'Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees'}
      description="Shop from a wide range of The Derma Co products for skin and hair care. The science-backed solutions are suitable for both men and women."
      canonical={`https://thedermaco.com${asPath}`}
      openGraph={{
        url: 'https://thedermaco.com/',
        type: 'website',
        locale: 'en_US',
        title: 'Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees',
        description: 'Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees',
        images: [
          {
            url: 'https://thedermaco.imgix.net/logo/stores/1/logo.jpg',
          },
        ],
        site_name: 'Suitifi | Official Website ',
      }}
    />
  </Fragment>
);
