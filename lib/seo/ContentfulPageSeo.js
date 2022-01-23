import React from "react";
import Head from "next/head";
import { DefaultSeo, NextSeo } from 'next-seo';

export default function ContentfulPageSeo({
  title,
  metaDescription,
}) {
  return (
    <div>
      <Head>
        {title ? (
          <meta name="twitter:title" key="twitter:title" content={title} />
        ) : (
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees"
          />
        )}
        {metaDescription ? (
          <meta
            name="twitter:description"
            key="twitter:description"
            content={metaDescription}
          />
        ) : (
          <meta
            name="twitter:description"
            key="twitter:description"
            content="Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees"
          />
        )}
      </Head>
      <NextSeo
        openGraph={{
          title: title,
          description: metaDescription,
        }}
      />
      <DefaultSeo
        title={title}
        description={metaDescription}
      />
    </div>
  );
}
