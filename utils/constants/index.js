import facebookF from 'shared/components/Icons/social/Facebook';
import { youtube, instagram } from 'shared/components/Icons';
import { PurseIcon, CallIcon, CartIcon, PinIcon,MobileLogoutIcon } from 'shared/components/SVGIcons';
import UserIcon from 'shared/components/SVGIcons/UserIcon';
import config from 'config/env';

export const BRAND_NAME = "Derma"
export const HOMEPAGE_CAROUSEL_IDS = [3,5,6,7,9];
export const HOMEPAGE_CAROUSEL_ID = 36;
export const HOMEPAGE_DEAL_OF_DAY_ID = 25;
export const SHOP_BY_CONCERN_ID = 5;
export const PLP_BEST_SELLERS_ID = 14;
export const PLP_COMBOS_ID = 34;
export const PLP_TODAYS_DEALS_ID = 25;
export const USER_REVIEWS_COUNT = 3;
export const CONTENTFUL_SPACE_ID = 'nmekay7cf73h';
export const CONTENTFUL_ACCESS_TOKEN = 'ft0-yalwWtpFr1FzYrBpF-fU9oOFPWzaSAWe0vK4KLQ';
export const COD_LIMIT = 5000;
export const HOMEPAGE_CONTENT_ID = 'homepageBanners';
export const HEADER_STRIP_CONTENT_ID = 'permanentHeaderStrip';
export const PRODUCTS_CONTENT_ID = 'thedermacoComproductsHtml';
export const CART_OFFER_CONTENT_ID = 'cartPageOffers';
export const PREPAID_LIMIT = 10000;
export const ADDRESS_LINE_LIMIT = 300;
export const NAME_LENGTH_LIMIT = 150;
export const MAX_PRODUCT_ADD_LIMIT = 14;
export const PAGE_LIMIT = 5;
export const TOPBAR_USP_STRING = 'Suitifi | Official Website | Buy Best Quality Designer Suits , Kurtas & Sarees';
export const HOME_PAGE_BANNER = [
"https://suitifi-production.imgix.net/homePageBanner/3.jpeg",
"https://suitifi-production.imgix.net/homePageBanner/5.jpeg",
"https://suitifi-production.imgix.net/homePageBanner/4.png",

]
export const PLANT_IFRAME_URL = 'https://www.youtube.com/embed/0u4VO0MPLiI'
export const HOMEPAGE_VISIBLE_RESULTS_VIDEOS = [
  "https://www.youtube.com/embed/gM_JyU1ZzKY?autoplay=0&amp;controls=0&rel=0&enablejsapi=1",
  "https://www.youtube.com/embed/GsSvknKUwFQ?autoplay=0&amp;controls=0&rel=0&enablejsapi=1"
];
export const OUR_DERMA_SPEAK_VIDEO = 'https://www.youtube.com/embed/AJjvyi1pxJA?autoplay=0&amp;controls=0&rel=0&enablejsapi=1';

export const DEFAULT_ERROR_MESSAGE = "Oops! we are facing some difficulty, Please check back after some time."

export const hideSnackBarOn = ['join','checkout','my-account','contact-us','order-track','plant','reset-password','change-password','mefaqprime','terms-and-conditions','terms-and-conditions-cashback','message-from-founder','plastic-positive','our-values','our-mission','lets-recycle','made-safe-certified','pledge','privacy-policy','questions-2','our-story','were-safe-2','skin-assessment'];

export const skinConcern = ["Open Pores", "Pigmentation", "Acne", "Ageing", "Dark Circles", "Acne Scars & Marks"];

export const skinTexture = ["Oily", "Dry", "Combination"];

export const skinType = ["Normal", "Sensitive"];

export const skinConcernHeading = "Please select your skin concern"

export const subHeading = "(Choose only one)"

export const skinTextureHeading = "Skin Texture"

export const skinTypeHeading = "Skin Type"

export const concernIcons = [
        "static/mamaearth/openPoresPink.png",
        "static/mamaearth/pigmentation.png",
        "static/mamaearth/acne.png",
        "static/mamaearth/Ageing.png",
        "static/mamaearth/darkCircles.png",
        "static/mamaearth/acneScars.png",
    ]

export const skinTextureIcons = [
        "static/mamaearth/drop.png",
        "static/mamaearth/dry.png",
        "static/mamaearth/combination.png"
    ]

export const skinTypeIcons = [
        "static/mamaearth/normal-skin.png",
        "static/mamaearth/Sensitive.png"
    ]

export const ingredientEffectData = ["Vitamin C", "Retinol", "Salicylic Acid", "Niacinamide", "Benzoyl Peroxide", "None"];  

export const acneData = [
      {
          title: "Papules",
          image: "https://thedermaco.imgix.net/dermatest/whitehead.jpg",
          description: "Small red bumps caused by bacteria accumulation."
      },
      {
          title: "Pustules",
          image: "https://thedermaco.imgix.net/dermatest/pustules.jpg",
          description: "Small white bumps containing pus."
      },
      {
          title: "Whiteheads",
          image: "https://thedermaco.imgix.net/dermatest/whitehead.jpg",
          description: "Small white bumps caused by clogged pores."
      },
      {
          title: "Blackheads",
          image: "https://thedermaco.imgix.net/dermatest/blackhead.jpg",
          description: "Small black bumps caused by clogged pores. These occur when whiteheads are exposed to air."
      },
  ]
export const pigmentationData = [
      {
          title: "Melasma/Blemishes",
          image: "https://thedermaco.imgix.net/dermatest/melasma.jpg",
          description: "Large dark, discolored patches caused by hormonal changes or sun damage"
      },
      {
          title: "Dark Spots",
          image: "https://thedermaco.imgix.net/dermatest/acne-dark-spots-J.jpg",
          description: "Black spots on face or hands"
      },
      {
          title: "Uneven skin tone",
          image: "https://thedermaco.imgix.net/dermatest/uneven-skin-J.jpg",
          description: "Some parts of the face (eg: around the mouth) look darker than the rest of the face"
      }
  ]
export const acneScarsData = [
      {
          title: "Acne Scars",
          image: "https://thedermaco.imgix.net/dermatest/Acne-Scars-J.jpg",
          description: "Permanent bumpy skin caused by severe acne"
      },
      {
          title: "Acne Marks",
          image: "https://thedermaco.imgix.net/dermatest/acne-mark-J.jpg",
          description: "Temporary marks or spots left after acne"
      }
  ]

export const shopByConcernCategories = [
  {
    title: "Suits",
    image: `https://suitifi-production.imgix.net/suits.jpeg?auto=compress&fm=webp`,
    path: '/product-category/acne-pimple',
  },
  {
    title: "Kurtas",
    image: `https://suitifi-production.imgix.net/kurta.jpeg?auto=compress&fm=webp`,
    path: '/product-category/acne-marks',
  },
  {
    title: "Sarees",
    image: `https://suitifi-production.imgix.net/sarees.jpeg?auto=compress&fm=webp`,
    path: '/product-category/open-pores',
  },
  {
    title: "Designer",
    image: `https://suitifi-production.imgix.net/designer.jpeg?auto=compress&fm=webp`,
    path: '/product-category/pigmentation-dark-spots',
  }
]
export const homePageCarouselsNames = [
  {
  name: "Suits",
  },
  {
  name: "Kurtas",
  },
  {
  name: "Sarees",
  },
  {
  name: "Designer",
  }
];
export const SkinAssessmentSteps = [
  {
    'desktopImage' : `https://honasa-tdc-static-staging.imgix.net/static/desktop_1.png?auto=compress&fm=webp`,
    'mobileImage' : `https://honasa-tdc-static-staging.imgix.net/static/mobile_1.png?auto=compress&fm=webp`,
    'description' : 'Take Free Skin Assessment'
  },
  {
    'desktopImage' : `https://honasa-tdc-static-staging.imgix.net/static/desktop_2.png?auto=compress&fm=webp`,
    'mobileImage' : `https://honasa-tdc-static-staging.imgix.net/static/mobile_2.png?auto=compress&fm=webp`,
    'description' : 'Get Personalized Recommendation'
  },
  {
    'desktopImage' : `https://honasa-tdc-static-staging.imgix.net/static/desktop_3.png?auto=compress&fm=webp`,
    'mobileImage' : `https://honasa-tdc-static-staging.imgix.net/static/mobile_3.png?auto=compress&fm=webp`,
    'description' : 'See visible difference in 3-8 weeks'
  },
]

export const HappyCustomersReviews = [
  {
  "image": `https://honasa-tdc-static-staging.imgix.net/static/r11-1.jpeg?auto=compress&fm=webp`,
  "rating": 5,
  "review": "This is how my skin looks on day 7 after using the customised skincare products from The Derma Co. Can't wait to see the end results. I'm satisfied with the products and I'm loving my skin’s new and healthy glow.",
  "name": "Arshi Bharti",
  "title": "Fast & Visible Results!"
  },
  {
  "image": `https://honasa-tdc-static-staging.imgix.net/static/robin-arora.jpeg?auto=compress&fm=webp`,
  "rating": 5,
  "review": "The Derma Co. takes such stress away from you by using technology and Derma Assessment Tool for FREE - Based on this, it recommends extremely effective dermatologist designed regimes which help you solve these problems - I have taken the 21-day challenge and already started seeing remarkable difference to my skin, you should try the same.",
  "name": "Robin Arora",
  "title": "FREE Skin Assessment Changed My Life!"
  },
  {
  "image": `https://honasa-tdc-static-staging.imgix.net/static/astham-sharma.jpeg?auto=compress&fm=webp`,
  "rating": 5,
  "review": "The Derma Co. products have made a huge difference on my skin. I have taken the #21dayschallenge and I am loving the results.",
  "name": "Astham Sharma",
  "title": "Fast & Incredible Results!"
  },
  {
  "image": `https://honasa-tdc-static-staging.imgix.net/static/priyanka-phulwani.jpeg?auto=compress&fm=webp`,
  "rating": 5,
  "review": "The regime suggested by the dermatologists at The Derma Co. was based on my skin type and issues. I have been using their products for a month now and I can clearly see positive results on my skin.",
  "name": "Priyanka Phulwani",
  "title": " Best Regime For Acne Prone Skin"
  },
  {
  "image": `https://honasa-tdc-static-staging.imgix.net/static/Raj.jpeg?auto=compress&fm=webp`,
  "rating": 5,
  "review": "My father, grandfather and even my elder brother have male pattern baldness. Naturally, I was next in line and it happened. I started experiencing hair fall and was stressed out over it. I tried all OTC products I could, until one day I found The Derma Co. I Have been using the hair fall regimen for 6 weeks and the difference has been spectacular. A high percentage of potent and powerful ingredients like procapil have worked well for me. My hair doesn’t fall anymore, and they’ve started regrowing, which is a huge relief.",
  "name": "Raj Sharma",
  "title": "Hereditary hair fall? What’s that?"
  },
  ]


export const catstringDescriptionMap = {
  'for-babies': 'Toxin-Free Mamaearth Baby Care Products',
  'beauty': 'Mamaearth Beauty Products, Made with Natural Ingredients',
  'best-seller': 'Mamaearth Best Sellers, Toxin-Free, Natural Ingredients',
  'skin': 'Mamaearth Skin Care Products, Toxin-Free, Natural Ingredients',
  'hair': 'Mamaearth Hair Care Products, Toxin-Free, Natural Ingredients',
  'best-deals': 'Best Deals On Mamaearth Products, No Toxins, Goodness of Nature',
  'body': 'Mamaearth Body Care Products, Natural Ingredients, Safe, No Toxins',
  'hair-shampoo': 'Mamaearth Hair Shampoo Range, Paraben & SLS Free, No Toxins',
  'hair-oil': 'Mamaearth Hair Growth Oil - Goodness of Nature',
  'hair-mask': 'Mamaearth Hair Mask Range - SLS, SLES, Paraben & Silicone-Free',
  'hair-serum': 'Mamaearth Hair Serum - No Parabens & No Silicones, Natural Ingredients',
  'body-butter': 'Mamaearth Body Butter Range - Goodness of Natural Ingredients, No Toxins',
  'body-lotion': 'Mamaearth Body Lotion Range - The Goodness of Nature',
  'body-scrub': 'Mamaearth Body Scrub Range - Natural Ingredients & No Toxins',
  'baby-shampoo': 'Gentle & Tear-Free Mamaearth Baby Shampoo',
  'baby-health': 'Mamaearth Baby Health Products, Made with Safe, Toxin-Free Natural Ingredients',
  'baby-oral-care': 'Mamaearth Baby Oralcare Range - Goodness of Nature, Toxin-Free',
  'baby-oil': 'Mamaearth Baby Oil - No Toxins, No Mineral Oil, Only The Goodness of Nature',
  'baby-skin': 'Mamaearth Baby Skin Products Range, Natural & Toxin-Free',
  'baby-bath': 'Mamaearth Baby Bath Products, Gentle & Toxin-Free , Goodness of Nature',
  'baby-lotion': 'Mamaearth Baby Lotion - Goodness of Nature & No Toxins',
  'baby-diaper': 'Mamaearth Plant-Based & Biodegradable Baby Diaper',
  'baby-powder': 'Mamaearth Baby Powder - Natural & Talc-Free, No Toxins',
  'face-wash': 'Mamaearth Face Wash Products Range - Goodness of Nature',
  'face-mask': 'Mamaearth Face Mask Range - Natural Ingredients, No Toxins',
  'face-cream': 'Mamaearth Face Cream Range - Safe & Natural Ingredients, No Toxins',
  'face-serum': 'Mamaearth Face Serum Range - Goodness of Nature, Safe & No Toxins',
  'face-scrub': 'Mamaearth Face Scrub Range - No Harmful Chemicals, Safe & Natural Ingredients',
  'face-toner': 'Mamaearth Face Toner Range - Alcohol-Free, No Toxins, Only the Goodness of Nature',
  'face-gel': 'Mamaearth Face Gel Range - No Silicones, No Parabens, No Toxins, Goodness of Nature',
  'hand-cream': 'Mamaearth Hand Cream Range - Triclosan-Free , 10x Moisturization , Kills 99% Germs',
}

export const contentIdMap = {
  'shop-by-concern': 'httpsthedermacoComshopByConcernHtml',
  'pigmentation-dark-spots': 'thedermacoComshopByConcernpigmentationHtml',
  'acne-marks': 'thedermacoComshopByConcernacneMarksHtml',
  'acne-pimple': 'thedermacoComshopByConcernacnePimpleHtml',
  'acne-scars': 'thedermacoComshopByConcernacneScarsHtml',
  'open-pores': 'thedermacoComshopByConcernopenPoresHtml',
  'dry-dull-skin': 'thedermacoComshopByConcerndryDullSkinHtml',
  'hair-care': 'thedermacoComshopByConcernhairCareHtml',
  'hair-fall':'thedermacoComshopByConcernhairCarehairfall',
  'skin-radiance': 'thedermacoComshopByConcernskinRadianceHtml',
  'glutathione-range': 'thedermacoComproductCategoryglutathioneRange'
}

export const contentfulIdMap = {
  'fantastic-friday': 'staticPage',
  'paytm-offer250' : 'paytm250',
  'paytm-offer350' : 'paytm350',
  'phonepe-offer250' : 'phonePe250',
  'phonepe-offer350' : 'phonePe350'
}

export const contentfulCategoryId = {
  'fantastic-friday': 11,
  'paytm-offer250' : 58,
  'paytm-offer350' : 77,
  'phonepe-offer250' : 69,
  'phonepe-offer350' : 85
}

export const footerLinks = {
  usefulLinks : [
    { name: 'Privacy Policy', val: '/privacy-policy' },
    { name: 'Returns', val: '/return-policy' },
    { name: 'Terms & Conditions', val: '/terms-and-conditions' },
    { name: 'Contact Us', val: '/contact-us' },
    { name: 'Sitemap', val: '/sitemap' },
  ],
  catagoriesLinks: [
    { name: 'Acne Marks', val: '/product-category/acne-marks' },
    { name: 'Pigmentation / Dark Spots', val: '/product-category/pigmentation-dark-spots' },
    { name: 'Acne / Pimple', val: '/product-category/acne-pimple' },
    { name: 'Acne Scars', val: '/product-category/acne-scars' },
    { name: 'Open Pores', val: '/product-category/open-pores' },
    { name: 'Dry & Dull Skin', val: '/product-category/dry-dull-skin' },
  ],
  accountLinks: [
    { name: 'Account', val: '/my-account' },
    { name: 'Orders', val: '/my-account/orders' },
    { name: 'Addresses', val: '/my-account/addresses' },
  ]
}


/*
To be removed when shifting from serverless
*/
export const newshop_img = "https://mamaearthp.imgix.net/wysiwyg/Cred%20Baby%20Banner-High%20Res.jpg?auto=format";

export const serviceFeatureData = [
  {
    mobileImg: `https://honasa-tdc-static-staging.imgix.net/static/free_shipping_mobile.png?auto=compress&fm=webp`,
    desktopImg: `https://honasa-tdc-static-staging.imgix.net/static/free_shipping_desktop.png?auto=compress&fm=webp`,
    title: 'Free Shipping',
    mobileSubtitle: 'Above Rs. 399',
    desktopSubtitle: 'On Order Above Rs. 399',
    mobileNaturalWidth: '44w',
    desktopNaturalWidth: '127w',
    mobileWidth: '22px',
    desktopWidth: '3rem',
    displayInsidePhonePe: true
  },
  {
    mobileImg: `https://honasa-tdc-static-staging.imgix.net/static/cod_available_mobile.png?auto=compress&fm=webp`,
    desktopImg: `https://honasa-tdc-static-staging.imgix.net/static/cod_available_desktop.png?auto=compress&fm=webp`,
    title: 'COD Available',
    mobileSubtitle: '@ Rs.19 Per Order',
    desktopSubtitle: '@ Rs.19 Per Order',
    mobileNaturalWidth: '34w',
    desktopNaturalWidth: '127w',
    mobileWidth: '17px',
    desktopWidth: '3rem',
    displayInsidePhonePe: false
  },  
];


export const socialAssets = [
  {
    linkTo: 'https://www.facebook.com/thedermaco',
    iconAsset: facebookF
  },
  {
    linkTo: 'https://www.instagram.com/thedermacoindia/',
    iconAsset: instagram
  },
  {
    linkTo: 'https://www.youtube.com/channel/UCak8KQ1SJXPx7bHIINsWFEA',
    iconAsset: youtube
  },
]

export const OrderCancellationReasons = [
  { 
    value: 'Wrong_delivery_address_provided', 
    label: 'Wrong delivery address provided' 
  },
  { 
    value: 'Changed_my_mind', 
    label: 'Changed my mind' 
  },
  {
    value: 'Want_to_order_different_product',
    label: 'Want to order different product',
  },
  { 
    value: 'Got_better_deal', 
    label: 'Got better deal' 
  },
  {
    value: 'Expected_delivery_time_is_long ',
    label: 'Expected delivery time is long ',
  },
  {
    value: 'Ordered_multiple_orders_by_mistake',
    label: 'Ordered multiple orders by mistake',
  },
  { 
    value: 'Change_Payment_mode', 
    label: 'Change Payment mode' 
  },
  {
    value: 'Forgot_to_apply_coupon_code',
    label: 'Forgot to apply coupon code',
  },
  { 
    value: 'Others', 
    label: 'Others' 
  },
];

export const preConnectLinks = [
  "https://images.ctfassets.net", 
  "https://tdc.imgix.net",  
  "https://www.googletagmanager.com",
  "https://mamaearthp.imgix.net",
];


export const myAccountMenu = [
  {
    id: 'profile',
    name: 'Your Profile',
    val: '/my-account/profile',
    icon: (
      <i className="manage-ac-icon">
        <UserIcon />
      </i>
    ),
  },
  {
    id: 'wallet',
    name: `${BRAND_NAME} Cash`,
    val: '/my-account/wallet',
    icon: (
      <i className="manage-ac-icon">
        <PurseIcon />
      </i>
    ),
  },
  {
    id: 'orders',
    name: 'Your Orders',
    val: '/my-account/orders',
    icon: (
      <i className="manage-ac-icon">
        <CartIcon />
      </i>
    ),
  },
  {
    id: 'addresses',
    name: 'Manage Addresses',
    val: '/my-account/addresses',
    icon: (
      <i className="manage-ac-icon">
        <PinIcon />
      </i>
    ),
  },
  {
    id: 'contact',
    name: 'Contact Us',
    val: '/contact-us',
    icon: (
      <i className="manage-ac-icon">
        <CallIcon />
      </i>
    ),
  },
  {
    id: 'logout',
    name: 'Logout',
    val: '',
    icon: (
      <i className="manage-ac-icon logout">
        <MobileLogoutIcon />
      </i>
    ),
  },
];

export const topBarLinks = [
  {
    id: 1,
    title: '+91-8750476476',
    toLink: 'tel:+91-8750476476'
  },
  {
    id: 2,
    title: 'care@thedermaco.com',
    toLink: 'mailto:care@thedermaco.com'
  },
  {
    id: 3,
    title: 'DERMASPEAKS',
    toLink: 'https://thedermaco.com/blog'
  } 
]
  
export const plantPageAssets = {
  banners: {
    desktop: 'https://mamaearthp.imgix.net/wysiwyg/desktop_home_img.jpg?auto=format',
    mobile: 'https://mamaearthp.imgix.net/wysiwyg/Mobile_home_img.jpg?auto=format'
  }
}

export const defaultFeedbackList = [
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Waris_Raza.jpg?auto=format',
    ratingCount: 100,
    description: 'Mamaearth products are so good and natural. They make my skin and hair feel really healthy. I mostly use Ubtan Face Wash, which is great for tan removal. It is much better than other face washes. Whenever I need any skin or hair care products I buy it from Mamaearth.',
    name: 'Waris Raza',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Sajal_Goyal.jpg?auto=format',
    ratingCount: 100,
    description: "I use Mamaearth Ubtan Face Wash. It gives me an instant natural glow. I love that the products are natural and don't contain any harmful preservatives. Plus the products are quite affordable.",
    name: 'Sajal Goyal',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Akanksha_Upadhyay.jpg?auto=format',
    ratingCount: 100,
    description: "Using these products, I feel like I'm close to nature. The hair products are excellent and I frequently use them. I'm also very happy with the shopping experience. Plus, the shipping was hassle free and the delivery was on time.",
    name: 'Akanksha Upadhyay',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Tanmaya_Shrivastav.jpg?auto=format',
    ratingCount: 100,
    description: "I use a number of Mamaearth products - Onion hair fall kit, body lotion and hair oil. I've had one of the best shopping experiences. The delivery was early and easy to track. The website is stable and smooth and easy to navigate. The payment gateway is also smooth and secure.",
    name: 'Tanmay',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Gina.jpg?auto=format',
    ratingCount: 100,
    description: "I use the Onion Shampoo, Onion Hair Mask, Onion Hair Serum, Ubtan Face Wash, Root Restore Hair Oil and many more. I have been using the products for almost six months now and I've literally got results that I've never got from any other brands (specially hair care products). I love that the products are completely natural.",
    name: 'Gina',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Priyanshi_Singh.jpg?auto=format',
    ratingCount: 100,
    description: "I have been using Mamaearth from the last few years and it's been a great experience. I love that the products are natural, toxin-free, and Paraben-free, which we usually don't find in the market. It doesn't harm your body and I love the smell. The market is full of brands loaded with chemicals which harm you so it's great that there's a brand like Mamaearth.",
    name: 'Priyanshi Singh',
  },
  {
    imgSrc: 'https://mamaearthp.imgix.net/wysiwyg/Manisha.jpg?auto=format',
    ratingCount: 100,
    description: "I wanted to use natural products for my baby and came across Mamaearth two years ago. And I am loving it. I use the Baby Shampoo, Toothpaste, Face Cream and I just love all of them. The website works perfectly. I would suggest you make an app also. Payment is secure and delivery was on time. This is the best brand in this category.",
    name: 'Manisha',
  },
];

export const gtmErrorCodeMapping = {
  404 : "Bad Request",
  401 : "Unauthorized",
  403 : "Forbidden",
  404 : "Not Found",
  500 : "Internal Server Error",
  502 : "Bad gateway",
  503 : "Service Unavailable",
  504 : "Gateway Timeout",
}
  