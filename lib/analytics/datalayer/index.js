import dataLayer from 'lib/gtmDataLayer';
import { max } from 'ramda';
import { gtmErrorCodeMapping } from 'utils/constants';

export function skinAssesmentPurchase(){
  const EVENT_NAME = 'skinAssesmentPurchase';
  dataLayer.push({
    event: EVENT_NAME
  })
}

export function regimneAddedToCart(){
  const EVENT_NAME = 'regimeAdded';
  dataLayer.push({
    event: EVENT_NAME
  })
}

export function apiResponseDataLayerFn(CODE, url) {
  const ENDPOINT = new URL(url).pathname;
  dataLayer.push({
    event: "apiResponse",
    code: CODE,
    message: gtmErrorCodeMapping[`${CODE}`],
    endPoint: ENDPOINT,
  })
}

export function bannerImpressions(desktopSliderData, currentSlide) {
  try {
    const EVENT_NAME = 'bannerImpressions';
    const eventProperties = {
      ecommerce: {
        promoClick: {
          promotions: [
            {
              id: desktopSliderData.sys.id || false,
              name: desktopSliderData.fields.title || false,
              position: currentSlide + 1,
            },
          ],
        },
      },
    };
    dataLayer.push({
      event: EVENT_NAME,
      ...eventProperties,
    });
  } catch (error) {
    console.error(`Error Firing bannerImpressions DataLayer Event.`);
    console.error(error);
  }
}

export function dataLayerFn(USERID) {
  dataLayer.push({
    event: "cartOpen",
    userId: USERID || undefined
  })
}

export function loginSuccess(userID) {
  const EVENT_NAME = 'loginSuccess';
  try {
    const eventProperties = {
      userId: userID,
      loginStatus: 'Login Successful',
    };

    dataLayer.push({
      event: EVENT_NAME,
      ...eventProperties,
    });
  } catch (error) {
    console.error(`Error Success Firing ${EVENT_NAME} Event.`);
    console.error(error);
  }
}

export function razorpayLoading(formatter) {
  const EVENT_NAME = 'razorpayLoad';
  try {
    const eventProperties = {
      value: formatter,
    };

    dataLayer.push({
      event: EVENT_NAME,
      ...eventProperties,
    });
  } catch (error) {
    console.error(`Error Success Firing ${EVENT_NAME} Event.`);
    console.error(error);
  }
}

export function navigationClick(newPagePath) {
  try {
    const eventProperties = {
      previousPathPath: document.location.pathname,
      newPagePath,
    };

    dataLayer.push({
      event: 'navigationClick',
      ...eventProperties,
    });
  } catch (error) {
    console.error('Error While Running navigationClick');
    console.error(error);
  }
}

export function placeOrder(USERID, isValid, METHOD) {
  try {
    dataLayer.push({
      event: 'paymentInitiated',
      userId: USERID ? USERID : undefined,
      isValid: isValid ? "Valid" : "Not Valid",
      paymentMethod: METHOD, 
    });
  } catch (error) {
    console.error('Error While Placing Order');
    console.error(error);
  }
}

export function productDecrement(NAME, VALUE) {
  dataLayer.push({
    event: 'productDecrement',
    productName: NAME,
    quantity: max(VALUE - 1, 0) ,
  });
}

export function productIncrement(NAME, VALUE) {
  dataLayer.push({
    event: 'productIncrement',
    productName: NAME,
    quantity: VALUE + 1,
  });
}

export function promotionClick(sliderData, sliderDataLink, index) {
  try {
    const EVENT_NAME = 'promotionClick';

    const eventProperties = {
      ecommerce: {
        promoClick: {
          promotions: [
            {
              id: sliderData.sys.id || false,
              name: sliderData.fields.title || false,
              position: index + 1,
            },
          ],
        },
      },
      eventCallback: sliderDataLink || false,
    };
    dataLayer.push({
      event: EVENT_NAME,
      ...eventProperties,
    });
  } catch (error) {
    console.error(`Error Firing ${EVENT_NAME} DataLayer Event.`);
    console.error(error);
  }
}
