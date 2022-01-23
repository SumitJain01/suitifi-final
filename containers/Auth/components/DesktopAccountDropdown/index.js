import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { PurseIcon, CallIcon, CartIcon, FavouriteIcon, PinIcon, RupeeIcon, MobileLogoutIcon } from 'shared/components/PageLayout/Header/Mobile/SvgIcons';
import SubText from 'shared/components/PageLayout/styled/SubText';
import Link from 'next/link';
import Profile from '../Profile';
import UserIcon from 'shared/components/SVGIcons/UserIcon';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

function DesktopAccountDropdown({ isLoggedIn, name, email, phone, logout, creditBalance, className, showLoginPopUp, hideLoginPopUp }) {
  const router = useRouter();
  const { asPath } = router;
  const mamacash = (creditBalance > 0) ? creditBalance.toFixed(2) : 0.0.toFixed(2);

  return (
    <div className={className}>
      {isLoggedIn && <Profile name={name} email={email} phone={phone} />}

      <div className="nav-items-container">
        {data.map((item) => {
          const isLogout = item.id === 'logout';
          const isMamacash = item.id === 'mamacash';
          if (!isLoggedIn && (isLogout || isMamacash)) return null;
          if (isLoggedIn && isMamacash) {
            item.previewContent = `₹ ${mamacash}`;
          }

          return (
            <Fragment key={item.name}>
              <Item
                className={`nav-item ${(asPath === item.val) ? 'isCurrent' : ''}`}
                onClick={() => {
                  if(isLoggedIn && isLogout) {
                    logout({ forceGuestReload: true }); 
                    router.push("/");
                  }
                  else if(!isLoggedIn && !item.name.includes('Contact')){
                    showLoginPopUp();
                  }
                }}
              >
                {item.icon}
                {
                  !isLoggedIn && item.val!='/contact-us' &&
                
                <SubText as="a">{item.name}</SubText>
            
                }

                {
                  !isLoggedIn && item.val=='/contact-us' &&
                  <Link prefetch={false} href={item.val}>
                    <SubText as="a">{item.name}</SubText>
                  </Link>
                }
                
                {
                  isLoggedIn && <Link prefetch={false} href={item.val}>
                    <SubText as="a">{item.name}</SubText>
                  </Link>
                }
                <div className={`preview-content ${item.id || ''}`}>{item.previewContent}</div>
              </Item>
              <NavItemSeparator />
            </Fragment>
          );
        })}
      </div>

      {!isLoggedIn && (
        <div onClick={()=>showLoginPopUp()} className="login-container">
          
            <LoginButton as="a">login</LoginButton>
        
        </div>
      )}
    </div>
  );
}

const Item = styled.div`
  margin: 0.5rem;
  padding: 0.25rem;
  cursor: pointer;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: 25px 1fr minmax(4rem, 1fr);
  align-items: center;
`;

const NavItemSeparator = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.smoke};
`;

const LoginButton = styled.button`
  padding: 0.5rem 0 0.5rem;
  width: 100%;
  display: inline-block;
  font-family: Roboto sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  background-color: ${props => props.theme.general.primaryColor};
  border-radius: 5px;
  border-top: 1px solid ${props => props.theme.colors.smoke};
  
  &:hover {
    color: #ffffff;
  }
`;

const data = [

  {
    id: '',
    name: 'Your Profile',
    val: '/my-account/profile',
    icon: (
      <i className="manage-ac-icon">
        <UserIcon />
      </i>
    ),
  },
  
  {
    id: 'mamacash',
    name: 'Derma Cash',
    val: '/my-account/wallet',
    previewContent: '',
    icon: (
      <i className="manage-ac-icon">
        <PurseIcon />
      </i>
    ), // dummy
  },
  {
    id: '',
    name: 'Your Orders',
    val: '/my-account/orders',
    icon: (
      <i className="manage-ac-icon">
        <CartIcon />
      </i>
    ),
  },
  {
    id: '',
    name: 'Manage Address',
    val: '/my-account/addresses',
    icon: (
      <i className="manage-ac-icon">
        <PinIcon />
      </i>
    ),
  },
  {
    id: '',
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
    val: '/',
    icon: (
      <i className="manage-ac-icon logout">
        <MobileLogoutIcon />
      </i>
    ),
  },
];

const mapStateToProps = createStructuredSelector({
})


export default styled(connect(mapStateToProps)(DesktopAccountDropdown))`
  z-index: 1;
  visibility: hidden;
  transition: all 0.2s;
  cursor: default;
  content: '';
  position: absolute;
  top: calc(100% + 1rem - 2px);
  right: 50%;
  min-width: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 16px #00000042;

  padding: 0;
  border-top: 2px solid ${props => props.theme.general.primaryColor};
  transform: translateX(50%);

  &:hover {
    visibility: visible;
    transition: 0s;
  }

  &::before {
    content: '';
    position: absolute;
    top: calc(0px - (10px / 2) - 2px);
    left: 50%;
    width: 10px;
    height: 10px;
    transform: translateX(-50%) rotate(45deg) skew(12deg, 12deg);
    background-color: #ffffff;
    border-top: 2px solid ${props => props.theme.general.primaryColor};
    border-left: 2px solid ${props => props.theme.general.primaryColor};
  }
  
  .manage-ac-icon {
    display: inline-grid;
    place-items: center;
    
    .path-selector {
      color: ${props => props.theme.colors.themePlaceholderGray};
    }
    &.logout .path-selector {
      fill: ${props => props.theme.colors.themePlaceholderGray};
    }
  }
  
  .nav-item.isCurrent ${SubText} {
    color: ${props => props.theme.general.primaryColor};
  }
  
  ${SubText} {
    white-space: nowrap;
  }
  
  .login-container {
    margin: 0.75rem;
  }
  
  .preview-content.mamacash {
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 0.9em;
    color: #6DA523;
    white-space: nowrap;
  }
`;
