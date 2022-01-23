import React from "react";
import Head from 'next/head';

function HomeSeo() {


 const makeSiteLinksSearchSchema = () => {
    return {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: "https://thedermaco.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://thedermaco.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
  };

 const makeOrganizationSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "The Derma Co. - Customized Skin & Hair Care Products",
      Description: "Shop from a wide range of The Derma Co products for skin and hair care. The science-backed solutions are suitable for both men and women.",
      url: "https://thedermaco.com/",
      Logo:
        "https://honasa-tdc-static-staging.imgix.net/static/Derma Logo Rectangular.jpg?auto=format,compress",
      sameAs: ["https://www.facebook.com/thedermaco/","https://twitter.com/thedermaco/","https://www.youtube.com/channel/UCak8KQ1SJXPx7bHIINsWFEA/","https://www.instagram.com/thedermacoindia/"],
      Founder: [
        {
          "@type": "Person",
          name: "Sumit Jain",
        },
      ],
      foundingDate: "2021",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7986483843",
          contactType: "customer service",
          email: "support@suitifi.com",
        },
      ],
      Address: {
        type: "PostalAddress",
        streetAddress: "Railway Road Sahnewal",
        addressLocality: "Ludhiana",
        addressRegion: "Punjab",
        postalCode: "141120",
        addressCountry: "INDIA",
      },
    };
  };
  return (
    <div>
      <Head>
        <script
          key="contentSchema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(makeOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(makeSiteLinksSearchSchema()),
          }}
        />
      </Head>
    </div>
  );
}

export default HomeSeo;
