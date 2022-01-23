import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import makeClevertap from 'lib/makeClevertap';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserInfo, makeSelectCreditBalance } from 'containers/Account/redux/selectors';
import { makeSelectLoggedIn,makeSelectUser } from 'containers/Auth/redux/selectors';
import { compose, propOr, pathOr } from 'ramda';
import { makeUTMParams } from 'containers/Checkout/redux/selectors';
import { makeSelectProductCategories } from 'containers/Products/redux/selectors';
import { makeSelectTotalProductQty } from 'containers/Cart/redux/selectors';
import { categoryLinks } from 'utils/constants/NavConstants';
import MegaDropdown from './MegaDropdown';

const clevertap = makeClevertap();

function Nav({ className, asPath, user, addresses, trackingData, walletBalance, loggedIn, quantity, categories }) {
  const router = useRouter();
  function selectCategoryLineClevertap(categoryName,link){    
    let searchQuery = categoryName.toLowerCase();
    
    if (categoryName==="Gift Packs"){
      searchQuery = "gift"
    }
    
    if (categoryName==="Face"){
      searchQuery = "skin"
    }
    
    let catId = pathOr('N/A', [searchQuery, 'id'],categories);

    clevertap.profile.push({
      Site: {
        last_viewed_category: categoryName
      },
    });
    clevertap.event.push("selectCategoryLine", {
      platform: "mewebsite",
      categoryLine: categoryName,
      timeStamp: new Date().getTime(),
      clickSource: router.asPath
      ? router.asPath.split('/').slice(-1)[0]==='/' ? 'home' : router.asPath.split('/').slice(-1)[0]
      : "",
      clickTarget: link.split("/").slice(-1)[0],
      clickLabel: categoryName,
      pageTitle: document.title,
      ...(catId!=="N/A" && {
        categoryID:catId
        }),
      ...(user && {
          email: user.email,
          phone: user.phone,
          gaUserId: user.id,
        }),
      ...trackingData,
    });
  }


  return (
    <nav className={className}>
      <ul className="mainMenu">
        {
          categoryLinks.map((link,index) => {
            if (link.name === 'Blog') {
              return (<li className="category" key={link.name} onClick={() =>selectCategoryLineClevertap(link.name,link.val)}>
                <a href={link.val}>
                  {link.name}
                </a>
              </li>);            
              }
            return (
            <li className="category" key={link.name}>
              <Link prefetch={false} href={link.val}>
                <a className={`${asPath === link.val ? 'active' : ''}`} onClick={() =>selectCategoryLineClevertap(link.name,link.val)}>
                  {link.name}
                </a>
              </Link>
              {link.subCategories && (link.subCategories.length > 0) && <MegaDropdown data={link} currentPath={asPath} loggedIn={loggedIn} user={user} addresses={addresses} trackingData={trackingData} walletBalance={walletBalance} quantity={quantity} categories={categories} index={index}/>}
            </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

function mapStateToProps() {
  return createStructuredSelector({
      loggedIn: makeSelectLoggedIn(),
      user: makeSelectUser(),
      addresses: compose(propOr(false, "addresses"), makeSelectUserInfo()),
      trackingData: makeUTMParams(),
      walletBalance: makeSelectCreditBalance(),
      quantity: makeSelectTotalProductQty(),
      categories: makeSelectProductCategories()
  });
}

const styledNav = styled(Nav)`
  font-family: Roboto, sans-serif;
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
  }
  ul.mainMenu {
    list-style-type: none;
    display: flex;
    height: 100%;
    align-items: center;
    li.category {
      position: relative;
      :not(:last-child) {
        margin-right: 2rem;
      }

      > a {
        color: ${({ theme }) => theme.colors.mediumGray};
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;

        &.active {
          color: ${({ theme }) => theme.general.primaryColor};
        }
      }
    }
  }
  li {
    cursor: pointer;
  }

  li.category:hover > ${MegaDropdown} {
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (min-width: 1400px) {
    ul.mainMenu {
      li {
        :not(:last-child) {
          margin-right: 3rem;
        }
      }
    }
  }
`;

export default connect(mapStateToProps, null)(styledNav);

