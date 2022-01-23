/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Main } from 'next/document';
import es6promise from 'es6-promise';
import { headerScripts, bodyScripts, footerScripts } from 'utils/appScripts';
import { ServerStyleSheet } from 'styled-components';
import getHomePageBanners from 'utils/helpers/getHomePageBanners';
import detectMobile from 'utils/helpers/mobileDetect';
import NextScript from 'utils/NextScript';
import HeadWithoutPreload from 'utils/Head';

import PreConnect from 'utils/helpers/head/PreConnect';
es6promise.polyfill();
import config from 'config/env';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    const { desktopSliderImages, mobileSliderImages } = await getHomePageBanners();
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        desktopSliderImages, 
        mobileSliderImages
      }
    } finally {
      sheet.seal()
    }
  }

  preloadBanners = (banners, isMobile) => {
    const dimension = isMobile ? '?fit=scale&w=400&h=200&fm=webp' : '';
    return banners.map((banner) => (
      <link rel="preload" as="image" href={`${banner}${dimension}`}/>
    ))
  }

  render() {
    const { desktopSliderImages, mobileSliderImages } = this.props;
    const isMobile = detectMobile();
    return (
      <Html lang="en" style={{"height": "100%"}}>
        <HeadWithoutPreload>
          <PreConnect />
          {this.preloadBanners((isMobile ? mobileSliderImages : desktopSliderImages),isMobile)}
          <link rel="shortcut icon" href={`https://honasa-tdc-static-staging.imgix.net/static/tdc_favicon.png?auto=compress&fm=webp`} />
          {headerScripts()}
        </HeadWithoutPreload>
        <body style={{"height": "100%"}}>
          {bodyScripts()}
          <div id="mobile-root"></div>
          <div id="cart-root"></div>
          <div id="modal-root"></div>
          <div id="search-root"></div>
          <div id="fb-root"></div>
          <Main />
          <NextScript />
          <script defer type="text/javascript" src="https://checkout.razorpay.com/v1/razorpay.js"></script>
          {/* {footerScripts()} */}
        </body>
      </Html>
    );
  }
}
