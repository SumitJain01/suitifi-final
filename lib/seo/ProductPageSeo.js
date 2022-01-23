import React from "react";
import NextHead from "next/head";
import { compose, find, pathOr } from "ramda";

export default function ProductPageSeo({
  product,
  reviews,
  productCatData,
}) {
  
  let d = new Date();
  let DateString =
    d.getFullYear() +
    1 +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);
  let reviewsSchema = [];

  const getDescriptionWithoutHtml = (product) => {
    let descWithHtml = pathOr(
      "",
      ["value"],
      product.customattributes.find(
        (item) => item.attribute_code == "short_description"
      )
    );
    if(descWithHtml !== ""){
    return descWithHtml.replace(/<[^>]+>/g, "");
    }
  };

  const makeProductSchema = (product,reviews) => {
    Object.keys(reviews).length && reviews?.reviews?.map((rev) => {
      if(!rev.nickname.includes('script')){
        reviewsSchema.push({
          "@type": "Review",
          datePublished: `${rev.created_at}`,
          reviewBody: `${rev.detail}`,
          author: {
            "@type": "Person",
            name: `${rev.nickname}`,
          },
        });
      }
    });
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.images?.map((image) => image),
      description: getDescriptionWithoutHtml(product),
      url: `https://thedermaco.com/product/${product.slug}`,
      sku: product.sku,
      mpn: Math.floor(Math.random() * 1000000),
      brand: {
        "@type": "Brand",
        name: "thedermaco",
      },
      offers: {
        "@type": "Offer",
        url: `https://thedermaco.com/product/${product.slug}`,
        priceCurrency: "INR",
        price: product.special_price ? product.special_price : product.price,
        priceValidUntil: `${DateString}`,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/UsedCondition",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (product.avg_rating_percent / 20).toFixed(1),
        bestRating: "5",
        worstRating: "1",
        reviewCount: product.review_count,
      },
      review: reviewsSchema,
    };
  };

  const makeBreadCrumbProductSchema = (product, productCatData) => {
    return {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://thedermaco.com/",
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `https://thedermaco.com/product-category/${productCatData?.url_key}`,
            name: productCatData?.name,
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": `https://thedermaco.com/product/${product?.slug}`,
            name: `${product?.name}`,
          },
        },
      ],
    };
  };

  const makeFaqSchemaForProduct = (product) => {
    const extractFaqs = compose(
      pathOr([], ["value"]),
      find((item) => item.attribute_code == "PARSED_FAQs")
    );
    const FAQQNA = extractFaqs(product.customattributes);
    var faqschema = {};
    if (FAQQNA.length !== 0) {
      var mainEntities = [];
      FAQQNA && FAQQNA.map((index, i) => {
        mainEntities.push({
          "@type": "Question",
          name: `${index && index.question}`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${index && index.answer}`,
          },
        });
      });
      return (faqschema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: mainEntities,
      });
    }
  };
  return (
    <div>
      <NextHead>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(makeProductSchema(product,reviews)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(makeFaqSchemaForProduct(product)),
          }}
        />
          {
            productCatData &&
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                makeBreadCrumbProductSchema(product, productCatData)
              ),
            }}
          />
          }
      </NextHead>
    </div>
  );
}
