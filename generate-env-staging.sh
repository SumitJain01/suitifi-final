#!/usr/bin/env sh
cat > .env << EOF
PORT=5000
API_URL=https://tdc-nd-api.honasa-staging.net/v1
ALGOLIA_APP=Q37QJGFOMZ
ALGOLIA_KEY=3b4b9493c14e163429bd13ea1dd41eb5
BRAND_TITLE=TDC
CDN_URL=https://honasa-tdc-staging.imgix.net
STATIC_CDN_URL=https://tdcstatic.imgix.net
ENABLE_GTM=true
FBAPP_ID=2496266903943390
FILESPACE=static/mamaearth
GCLIENT_ID=app
NAMESPACE=sites/mamaearth
NODE_ENV=production
NPM_CONFIG_PRODUCTION=false
PAYPAL_CLIENT_ID=AVDKfQNSjiCM-WlkEpL12oe6qTvuQxuyUVKyStYJmsPDm20RHB2NJ8Xx87-D_koKno2Xxu7tmacfK4Jg
RZP_KEY=rzp_test_ntlS5fABlpdfqQ
ENVFILEMODE=true
PRERENDER_TOKEN=9ZMLwYnGrzS0G6QqKB7S
SERVERLESS_URL=https://sapi.mamaearth.io/api/v1
SERVERLESS_BASE_URL=https://sapi.mamaearth.io
SELF_URL=http://localhost:3000
SITE_TITLE=The Derma Co
STATIC_CDN=https://honasa-tdc-staging.imgix.net
SERVICE_WORKER_URL=https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js
CLEVERTAP_KEY=RZ9-479-5Z6Z
GTM_KEY=GTM-P7RH3C9
GCM_SENDER_ID=789765138187

