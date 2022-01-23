import React from 'react';
import {
  map,
  prop,
  filter,
  compose,
  has,
  __,
} from 'ramda';
import {
  SingleImageBanner,
  ResponsiveImageBanner,
  ProductListBySlugs,
  HTMLBlock,
  Feedback,
  ProductListByCatId,
  ProductCatHeading,
  OfferSliderBlock,
  MainSlider,
  CountDown,
  FAQ
} from 'containers/Contentful/components';
import Link from 'next/link';
import Button from 'shared/components/Button';
import Flex from 'shared/components/Flex';

const componentMap = {
  singleImageBanner: {
    Component: SingleImageBanner,
    acceptedProps: [{ name: 'url', required: true }],
  },
  responsiveExternalImageBanner: {
    Component: ResponsiveImageBanner,
    acceptedProps: ['mobileUrl', 'desktopUrl'],
  },
  productSlugList: {
    Component: ProductListBySlugs,
    acceptedProps: ['title', { name: 'slugs', required: true }],
  },
  htmlBlock: {
    Component: HTMLBlock,
    acceptedProps: [{ name: 'html', required: true }],
  },
  testimonialList: {
    Component: Feedback,
    acceptedProps: [{ name: 'testimonialItems', required: true }, { name: 'title' }],
  },
  productCategoryList: {
    Component: ProductListByCatId,
    acceptedProps: ['title', { name: 'categoryId', required: true }],
  },
  productCategoryHeading: {
    Component: ProductCatHeading,
    acceptedProps: ['heading'],
  },
  offerSlider: {
    Component: OfferSliderBlock,
    acceptedProps: ['mobileUrl', 'desktopUrl'],
  },
  responsiveExternamCarousel: {
    Component: MainSlider,
    acceptedProps: ['slider']
  },
  countdown: {
    Component: CountDown,
    acceptedProps: ['heading', 'subheading1', 'subheading2', 'subHeading3']
  },
  faq : {
    Component: FAQ,
    acceptedProps: []
  }
};

export const renderPageContent = ({ pageContent, pageTitle }) => {
  let array = filter(compose(has(__, componentMap), prop('contentType')))(pageContent)
  return (
    <>
      {map(
        renderPageContentItem(pageTitle),
        array
      )}
      {
        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1rem" }}>
          <Link prefetch={false} className="shopBtn" href={'/products'}>
            <Button>VIEW ALL PRODUCTS</Button>
          </Link>
        </Flex>
      }
    </>
  )
};

function renderPageContentItem(pageTitle) {
  return ({ contentType, ...passThroughProps }) => {
    if (componentMap[contentType]) {
      const { Component, acceptedProps } = componentMap[contentType];
      return React.cloneElement(
        <Component />,
        Object.assign(passThroughProps, { acceptedProps, pageTitle })
      );
    }
    return null;
  };
}