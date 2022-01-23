/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
export const makeJsonLd = ({
  currentUrl,
  description,
  pageTitle,
  imageUrl,
  url,
}) => `
  {"@context": "https://schema.org",
  "@graph": [{
    "@type": "Organization",
    "@id": "${currentUrl}#organization",
    "name": "",
    "url": "${currentUrl}",
    "sameAs": []
  }, {
    "@type": "WebSite",
    "@id": "${currentUrl}#website",
    "url": "${currentUrl}",
    "name": "The Derma Co | Official Website",
    "publisher": {
      "@id": "${currentUrl}#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "${currentUrl}?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }, {
    "@type": "WebPage",
    "@id": "${url}#webpage",
    "url": "${url}",
    "inLanguage": "en-US",
    "name": "${pageTitle}",
    "isPartOf": {
      "@id": "${currentUrl}#website"
    },
    "about": {
      "@id": "${currentUrl}#organization"
    },
    "datePublished": "2017-10-03T12:46:10+00:00",
    "dateModified": "2019-10-14T04:46:06+00:00",
    "description": "${description}"
    ${!imageUrl ? '' : renderImage(url, imageUrl, pageTitle)}
  }]}
`;

function renderImage(url, imageUrl, pageTitle) {
  return `
  ,"image": {
    "@type": "ImageObject",
    "@id": "${url}#primaryimage",
    "url": "${imageUrl}",
    "width": 800,
    "height": 800,
    "caption": "${pageTitle}"
  },
  "primaryImageOfPage": {
    "@id": "${url}#primaryimage"
  }
  `;
}
