/* eslint-disable no-param-reassign */
require('dotenv').config();
const axios = require('axios');
const withOffline = require('next-offline');
const { path: ramdaPath } = require("ramda");
const path = require('path');
// const WebpackPwaManifest = require("webpack-pwa-manifest");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const apiPath = `^${process.env.API_URL}`;
// const apiUrl = `${process.env.API_URL}`;

const isProd = process.env.NODE_ENV === 'production'

const workboxOpts = {
  clientsClaim: true,
  skipWaiting: true,
  modifyURLPrefix: {
    '.next': '/_next',
  },
  globIgnores: ['_next/static/*'],
  runtimeCaching: [
    // {
    //   urlPattern: new RegExp(apiPath),
    //   handler: 'NetworkFirst',
    //   options: {
    //     cacheName: 'request-cache',
    //     cacheableResponse: {
    //       statuses: [200],
    //     },
    //   },
    // },
    // {
    //   urlPattern: new RegExp('^https://fonts.gstatic.com/'),
    //   handler: 'CacheFirst',
    //   options: {
    //     cacheName: 'font-cache',
    //     cacheableResponse: {
    //       statuses: [200],
    //     },
    //   },
    // },
    {
      urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'image-cache',
        cacheableResponse: {
          statuses: [200],
        },
        expiration: {
          maxEntries: 40,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          purgeOnQuotaError: true,
        },
      },
    },
  ],
};

module.exports = withBundleAnalyzer({
  images: {
    // loader: "imgix",
    // path: "",
    domains: [
      // 'images.ctfassets.net',
      // 'tdc.imgix.net',
      // 'honasa-tdc-staging.imgix.net',
      // 'tdc-mg-cs.honasa-staging.net',
      // 'tdc-mg-cs.honasa-production.net',
      'suitifi-production.imgix.net'
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/products.html',
  //       destination: '/products',
  //       permanent: true,
  //     },
  //     {
  //       source: '/products/creamy-cleanser-for-sensitive-skin\\.html',
  //       destination: '/product/creamy-cleanser',
  //       permanent: true,
  //     },
  //     {
  //       source: '/products/5-caffeine-under-eye-serum-for-dark-circles-&-puffiness\\.html',
  //       destination: '/product/5-caffeine-under-eye-serum-for-dark-circles-puffiness',
  //       permanent: true,
  //     },
  //     {
  //       source: '/products/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true,
  //     },
  //     {
  //       source: '/shop-by-concern/pigmentation\\.html',
  //       destination: '/product-category/pigmentation-dark-spots',
  //       permanent: true
  //     },
  //     {
  //       source: '/shop-by-concern/:category_slug/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true,
  //     },
  //     {
  //       source: '/2-salicylic-acid-serum\\.html',
  //       destination: '/product/2-salicylic-acid-serum',
  //       permanent: true
  //     },
  //     {
  //       source: '/retinol-serum\\.html',
  //       destination: '/product/retinol-serum',
  //       permanent: true
  //     },
  //     {
  //       source: '/shop-by-concern/:slug\\.html',
  //       destination: '/product-category/:slug',
  //       permanent: true,
  //     },
  //     {
  //       source: '/new-launches/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true
  //     },
  //     {
  //       source: '/festival-offers/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true
  //     },
  //     {
  //       source: '/fantastic-friday/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true
  //     },
  //     {
  //       source: '/bestsellers/:slug\\.html',
  //       destination: '/product/:slug',
  //       permanent: true
  //     },
  //     {
  //       source: '/customer/account/login/referer/:slug\\/',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/customer/account/:slug',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/customer/account',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/customer/account/:slug\\/',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/points/history',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/sales/order/history',
  //       destination: '/my-account',
  //       permanent: true,
  //     },
  //     {
  //       source: '/salicylic-range.html',
  //       destination: '/product-category/salicylic-range',
  //       permanent: true
  //     },
  //     {
  //       source: '/effervescent-tablets.html',
  //       destination: '/product-category/effervescent-tablets',
  //       permanent: true
  //     },
  //     {
  //       source: '/bestsellers.html',
  //       destination: '/product-category/best-sellers',
  //       permanent: true
  //     },
  //     {
  //       source: '/10-percent-niacinamide-serum.html',
  //       destination: '/product/10-niacinamide-serum',
  //       permanent: true
  //     },
  //     {
  //       source: '/biotin-hair-vitamins.html',
  //       destination: '/product/biotin-multivitamin',
  //       permanent: true
  //     },
  //     {
  //       source: '/30-aha-2-bha-peeling-solution.html',
  //       destination: '/product/30-aha-2-bha-peeling-solution',
  //       permanent: true
  //     },
  //     {
  //       source: '/20-percent-vitamin-c-serum.html',
  //       destination: '/product/20-percent-vitamin-c-serum',
  //       permanent: true
  //     },
  //     {
  //       source: '/aha-bha-foaming-cleanser-for-all-skin-types.html',
  //       destination: '/product/aha-bha-foaming-cleanser-for-all-skin-types',
  //       permanent: true
  //     },
  //     {
  //       source: '/ultra-matte-sunscreen-gel.html',
  //       destination: '/product/ultra-matte-sunscreen-gel',
  //       permanent: true
  //     },
  //     {
  //       source: '/aha-bha-gel-for-active-acne.html',
  //       destination: '/product/aha-bha-gel-for-active-acne',
  //       permanent: true
  //     },
  //     {
  //       source: '/kojic-acid-cream.html',
  //       destination: '/product/2-kojic-acid-cream',
  //       permanent: true
  //     },
  //     {
  //       source: '/0-3-retinol-serum.html',
  //       destination: '/product/0-3-retinol-serum',
  //       permanent: true
  //     },
  //     {
  //       source: '/10-azelaic-acid-cream.html',
  //       destination: '/product/10-azelaic-acid-cream',
  //       permanent: true
  //     },
  //     {
  //       source: '/5-caffeine-serum.html',
  //       destination: '/product/5-caffeine-under-eye-serum-for-dark-circles-puffiness',
  //       permanent: true
  //     },
  //     {
  //       source: '/fruit-aha-skin-revitalizer.html',
  //       destination: '/product/fruit-aha-skin-revitalizer',
  //       permanent: true
  //     }
  //   ]
  // },
  workboxOpts,
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // config.plugins.push(
      //   new WebpackPwaManifest({
      //     filename: "static/manifest.json",
      //     name: process.env.SITE_TITLE,
      //     short_name: process.env.SITE_TITLE,
      //     description: process.env.SITE_DESC || "",
      //     background_color: "#ffffff",
      //     theme_color: "#000000",
      //     display: "standalone",
      //     orientation: "portrait",
      //     fingerprints: false,
      //     gcm_sender_id: process.env.GCM_SENDER_ID,
      //     inject: false,
      //     start_url: "/",
      //     ios: {
      //       "apple-mobile-web-app-title": process.env.SITE_TITLE,
      //       "apple-mobile-web-app-status-bar-style": "#000000"
      //     },
      //     icons: [
      //       {
      //         src: path.resolve(
      //           path.join(__dirname, process.env.FILESPACE, "/favicon.png")
      //         ),
      //         sizes: [96, 128, 192, 256, 384, 512],
      //         destination: "../static/appicons/"
      //       }
      //     ],
      //     includeDirectory: true,
      //     publicPath: ".."
      //   })
      // );
      config.optimization.splitChunks.cacheGroups.framework = {
        chunks: 'all',
        name: 'framework',
        test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
        reuseExistingChunk: true,
        priority: 40,
        enforce: true,
        minChunks: 1
      };
  
  
      config.optimization.splitChunks.cacheGroups.commons = {
        chunks: 'all',
        name: 'commons',
        minChunks: 1,
        reuseExistingChunk: true,
        priority: 40
      };
    }
    // config.resolve.alias.namespace = path.join(__dirname, process.env.NAMESPACE);
    return config;
  },
  // publicRuntimeConfig: {
  //   API_URL: process.env.API_URL,
  //   SERVERLESS_BASE_URL: process.env.SERVERLESS_BASE_URL,
  //   SERVERLESS_URL: process.env.SERVERLESS_URL,
  //   FILESPACE: process.env.FILESPACE,
  //   SITE_TITLE: process.env.SITE_TITLE,
  //   NODE_ENV: process.env.NODE_ENV,
  //   RZP_KEY: process.env.RZP_KEY,
  //   GFONT_URL: process.env.GFONT_URL,
  //   CDN_URL: process.env.CDN_URL,
  //   STATIC_CDN_URL: process.env.STATIC_CDN_URL,
  //   STATIC_CDN: process.env.STATIC_CDN,
  //   BRAND_TITLE: process.env.BRAND_TITLE,
  //   GCLIENT_ID: process.env.GCLIENT_ID,
  //   FBAPP_ID: process.env.FBAPP_ID,
  //   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  //   ENABLE_GTM: process.env.ENABLE_GTM,
  //   SELF_URL: process.env.SELF_URL,
  //   PORT: process.env.PORT,
  //   SERVERLESS_BASE_URL: process.env.SERVERLESS_BASE_URL,
  //   BEST_SELLER_CATEGORY_ID: process.env.BEST_SELLER_CATEGORY_ID,
  //   NEW_LAUNCHES_CATEGORY_ID: process.env.NEW_LAUNCHES_CATEGORY_ID,
  //   APPLICABLE_WALLET_PERCENTAGE: process.env.APPLICABLE_WALLET_PERCENTAGE,
  //   ALGOLIA_APP: process.env.ALGOLIA_APP,
  //   ALGOLIA_KEY: process.env.ALGOLIA_KEY,
  //   CLEVERTAP_KEY: process.env.CLEVERTAP_KEY,
  //   GTM_KEY: process.env.GTM_KEY,
  //   GCM_SENDER_ID: process.env.GCM_SENDER_ID
  // },
  experimental: {
    granularChunks: true,
  },
});
