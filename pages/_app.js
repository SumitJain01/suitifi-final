import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppModals from 'shared/components/AppModals';
import { noop } from 'ramda-adjunct';
import { routerPropTypes } from 'utils/PropTypes';
import { applylocalStorageAddressData } from 'containers/Checkout/redux/actions'
import PageLayout from 'shared/components/PageLayout/index';
import { wrapper } from '../store';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://3.109.56.198/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    let ls = localStorage.getItem("pwaState");
    let parsedLs = ls ? JSON.parse(ls) : null;
    let userId = parsedLs ? `"${parsedLs.auth.data.user.id}"` : undefined;
    let script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = `dataLayer.push({'userId':${userId}})`;
    document.head.appendChild(script_tag);
    if (parsedLs && parsedLs.checkout.localStorageAddressData) {
      applylocalStorageAddressData(parsedLs.checkout.localStorageAddressData);
    }
  }, [])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            )
          },
          function (err) {
            console.log('Service Worker registration failed: ', err)
          }
        )
      })
    }
  }, [])

  return (
    <ApolloProvider client={client}>
    <PageLayout>
      <Component {...pageProps} />
      <AppModals />
    </PageLayout>
    </ApolloProvider >
  )
}

export default wrapper.withRedux(MyApp);

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  router: routerPropTypes,
};

MyApp.defaultTypes = {
  Component: noop,
};
