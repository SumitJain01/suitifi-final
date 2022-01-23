/* seo for productListingPages */
import React from "react";
import Head from "next/head";
import { pathOr } from "ramda";
import { DefaultSeo, NextSeo } from 'next-seo';

export default function ProductListSeo({
  productCategorySchema,
  productCategoryData,
  metaSchema,
}) {
  let metaTitle = pathOr(
    "Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees", 
    ["meta_title"], metaSchema
    );
  let metaDescription = pathOr("N/A", ["meta_description"], metaSchema);
  let metaKeywords = pathOr("N/A", ["meta_keyword"], metaSchema);
  const makeProductCategorySchema = (productCategorySchemaData, productCategoryData) => {
    try {
      let itemListElement = [];
      const numberOfItems = pathOr(
        "N/A",
        ["numberOfItems"],
        productCategorySchemaData
      );
      const itemListElementpath = pathOr(
        "N/A",
        ["itemListElement"],
        productCategorySchemaData
      );
      Object.values(itemListElementpath).map((product, i) => {
        const reviewpath = pathOr("N/A", ["item", "review"], product);

        if (product && product instanceof Object) {
          itemListElement.push({
            "@type": "ListItem",
            "position": `${product.position}`,
            "item": {
              "@type": "Product",
              "name": `${product.item.name}`,
              "image": `${product.item.image}`,
              "description": `${product.item.description}`,
              "url": `${product.item.url}`,
              "sku": `${product.item.sku}`,
              "mpn": `${product.item.mpn}`,
              "brand":{
                "@type":"Brand",
                "name":`${product.item.brand.name || 'Mamaearth'}`
              },
              "review": Object.values(reviewpath).map((review, i) => {
                // console.log(review)
                return {
                  "@type": "Review",
                  "datePublished": `${review.datePublished}`,
                  "reviewBody": `${review.reviewBody}`,
                  "author": {
                    "@type": "Person",
                    "name": `${review.author.name}`,
                  },
                };
              }),
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": `${product.item.aggregateRating.ratingValue}`,
                "reviewCount": `${product.item.aggregateRating.reviewCount}`,
              },
              "offers": {
                "@type": "Offer",
                "url": `${product.item.offers.url}`,
                "priceCurrency": `${product.item.offers.priceCurrency}`,
                "price": `${product.item.offers.price}`,
                "priceValidUntil": `${product.item.offers.priceValidUntil}`,
                "itemCondition": `${product.item.offers.itemCondition}`,
                "availability": "https://schema.org/InStock",
              },
            },
          });
        }
      });
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "url": `https://thedermaco.com/product-category/${productCategoryData && productCategoryData.url_key}`,
        "numberOfItems": `${numberOfItems}`,
        "itemListElement": itemListElement,
      };
    } catch (err) {
      console.log(err);
    }
  };

  const makeBreadCrumbProductCategorySchema = (productCategoryData) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thedermaco.com/product-category",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `${productCategoryData && productCategoryData.name}`,
          "item": `https://thedermaco.com/product-category/${productCategoryData && productCategoryData.url_key}`,
        },
      ],
    };
  };

  return (
    <div>
      <Head>
        {metaTitle ? (
          <meta name="twitter:title" key="twitter:title" content={metaTitle} />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              makeProductCategorySchema(productCategorySchema,productCategoryData)
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              makeBreadCrumbProductCategorySchema(productCategoryData)
            ),
          }}
        />
      </Head>
      <NextSeo
        openGraph={{
          title: metaTitle,
          description: metaDescription,
        }}
      />
      <DefaultSeo
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
      />
    </div>
  );
}
