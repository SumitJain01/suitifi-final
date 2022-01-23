/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import config from 'config/env';
import makeClevertap from 'lib/makeClevertap';

export const headerScripts = () => {
  return(
    <Fragment> 
      {<script dangerouslySetInnerHTML={{
      __html: `
      window._me_fe_ = {ps: true, plp: true};
      window.dataLayer = [];
      dataLayer.push({
        originalLocation: document.location.protocol + '//' +
          document.location.hostname +
          document.location.pathname +
          document.location.search,
        isServerless: true
      })`}}
    />}
    </Fragment>
  )
};

export const bodyScripts = () => {}; // Use for GTM Body

export const footerScripts = () => {

  const clevertap = makeClevertap();
  const handler = (e) => {
    document.addEventListener('DOMNodeInserted', function (e) {
      if (e.target.id === 'faq-bot-button') {
        e.target.addEventListener('click', e => {
          clevertap.event.push('selectHelpChat', {
            platform: 'mewebsite',
            timeStamp: new Date().getTime(),
            pageTitle: document.title,
            clickSource: window.location.pathname, 
            clickTarget: window.location.pathname,
            clickLabel:  window.location.pathname.split('/').slice(-1)[0]
          })
        });
      }
    })
  };

  return(
  <Fragment>
    {config.enableGTM && <script defer
      dangerouslySetInnerHTML={{
        __html: `
        var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
    clevertap.account.push({"id": "${config.clevertapKey}"});
    clevertap.privacy.push({optOut: false});
    clevertap.privacy.push({useIP: false}); 
    (function () {
            var wzrk = document.createElement('script');
            wzrk.type = 'text/javascript';
            wzrk.async = true;
            wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js?v=0';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wzrk, s);
    })();`,
    }}
    />}
    {config.enableGTM && <script defer
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.onload=${handler};f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${config.gtmKey}');`,
      }}
    />
    }
  </Fragment>
);
}
