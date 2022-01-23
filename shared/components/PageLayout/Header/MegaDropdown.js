import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainText from '../styled/MainText';
import SubText from '../styled/SubText';
import makeClevertap from 'lib/makeClevertap';
import { useRouter } from 'next/router';
import { pathOr } from 'ramda';
const clevertap = makeClevertap();

function MegaDropdown({ exploreLinks, data, currentPath, className,user, addresses, trackingData, walletBalance, categories, quantity }) {
  const router = useRouter();
  function selectViewAllClevertap(e){
    let address;
    e.stopPropagation();

    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // address = userInfo && userInfo.addresses && userInfo.addresses.filter(obj => {
    //     return obj.default_shipping === true;
    // });
    clevertap.event.push('selectViewAll',{
      platform: 'mewebsite',
      timeStamp: new Date().getTime(),
      pageTitle: process.browser ? document.title : '',
      quantity: quantity,
      clickSource: router.asPath.split('/').slice(-1)[0],
      clickTarget: 'shop',
      clickLabel: 'viewAll',
      clickUrl: '/shop',
      ...trackingData,
      // ...(address && {
      //     pincode: Number(address[0].postcode),
      //     city: address[0].city,
      // }),
      quantity,
      ...(user && {
          userName: user.firstName + ' ' + user.lastName,
          email: user.email,
          phone: user.phone,
          gaUserId: user.id,
          walletBalance: walletBalance
      }), 
    });
  }
  return (
    <div className={`${className} mega-dropdown`}>
      {<Category data={data} currentPath={currentPath} addresses={addresses} user={user} trackingData={trackingData} categories={categories}/>}
    </div>
  );
}

const Category = ({ data, currentPath, user, trackingData, addresses, categories }) => {
  const router = useRouter();
  function selectCategoryClevertap(e, categoryLine, clickLabel, clickUrl){
    e.stopPropagation();
    let address;
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // address = userInfo && userInfo.addresses && userInfo.addresses.filter(obj => {
    //     return obj.default_shipping === true;
    // });
    let searchQuery = clickUrl.split('/').slice(-1)[0]
    let catId = pathOr('N/A', [searchQuery, 'id'],categories);
    clevertap.event.push('selectCategory', {
      platform: 'mewebsite',
      timeStamp: new Date().getTime(),
      pageTitle: process.browser ? document.title : '',
      clickSource: router.asPath.split('/').slice(-1)[0] == '' ? "Home" : clickUrl.split('/').slice(-1)[0],
      categoryLine: categoryLine,
      clickLabel: clickLabel,
      clickUrl: clickUrl,
      clickTarget: clickUrl.split('/').slice(-1)[0],
      ...trackingData,
      ...(catId!=="N/A" && {
        categoryID:catId
      }),
      ...(user && {
          userName: user.firstName + ' ' + user.lastName,
          email: user.email,
          phone: user.phone,
          gaUserId: user.id,
      }),
      // ...(address && {
      //     pincode: Number(address[0].postcode),
      //     city: address[0].city,
      // }),
    });
  }
  return (
    <StyledCategory>
      {data.subCategories?.map((item, index) => (
        <Link prefetch={false} href={item.val} passHref key={item.name + index}>
          <SubText className={currentPath === item.val ? 'active' : ''} as="a" onClick={e =>selectCategoryClevertap(e,data.name,item.name,item.val) }>
            {item.name}
          </SubText>
        </Link>
      ))}
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  /* min-width: 6rem; */
  /* min-height: 2.5rem; */
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  &:not(:first-child) {
    border-left: 1px solid ${props => props.theme.colors.smoke};
    padding-left: 1.25rem;
  }
`;

export default styled(MegaDropdown)`
  transition: all 0.3s;
  cursor: default;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 50%;
  content: '';
  transform: translateX(-27%);

  /* min-width: 300px; */
  /* min-height: 160px; */

  display: flex;
  align-items: flex-start;
  padding: 0.25rem 1rem 1rem;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 16px #00000042;
  border-top: 2px solid ${({ theme }) => theme.general.primaryColor};
  
  ${MainText}.active {
    color: ${({ theme }) => theme.general.primaryColor};
  }

  ${SubText} {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.themePlaceholderGray};
    font-size: 0.87rem;
    font-weight: 400;
    text-transform: capitalize;

    &:active, &.active {
      color: ${({ theme }) => theme.general.primaryColor};
    }
    &:hover:not(.active) {
      color: ${({ theme }) => theme.colors.mediumGray};
    }
  }
  .view-all-link {
    color: ${({ theme }) => theme.general.primaryColor};
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.4em;
  }
`;
