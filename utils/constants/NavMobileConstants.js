import {
  TruckIcon,
  BeautyIcon,
} from 'shared/components/PageLayout/Header/Mobile/SvgIcons';
import { SkinBlogIcon, ReviewsIcon } from 'shared/components/SVGIcons';

function getStaticLinksData() {
  const shopByConcernCategories = [
    { name: 'Acne Marks', val: '/product-category/acne-marks' },
    { name: 'Pigmentation / Dark Spots', val: '/product-category/pigmentation-dark-spots' },
    { name: 'Acne / Pimple', val: '/product-category/acne-pimple' },
    { name: 'Acne Scars', val: '/product-category/acne-scars' },
    { name: 'Open Pores', val: '/product-category/open-pores' },
    { name: 'Dry & Dull Skin', val: '/product-category/dry-dull-skin' },
    { name: 'View All Products', val: '/products' },

  ];
  return {
    trackOrderCategory: {
      name: 'Track Order',
      val: '/track-order',
      icon: <TruckIcon />,
    },
    productSections: [
      {
        name: 'Shop by Concern',
        val: '/shop',
        icon: <BeautyIcon />,
        categories: shopByConcernCategories
      },
    ],
    accountNavItems: [
      { name: 'My Account', val: '/my-account' },
      { name: 'My Orders', val: '/my-account/orders' }, // dummy
      { name: 'My Wallet', val: '/my-account/wallet' }, // dummy
    ],
    aboutSection: [
      { name: 'The Derma Co Support', val: '/' },
      { name: 'Join Our Community', val: 'https://www.facebook.com/groups/thedermachatroom/' },
    ],
    supportSections: [
      { name: 'Contact Us', val: '/contact-us' },
      { name: 'Track Order', val: '/track-order' },
      { name: 'Terms Of Use', val: '/terms-and-conditions' },
      { name: 'Privacy Policy', val: '/privacy-policy' },
      { name: 'Return Policy', val: '/return-policy' },
    ],
    chatWithUs: { name: 'Need Help?', val: '' },
  };
}
export default getStaticLinksData;