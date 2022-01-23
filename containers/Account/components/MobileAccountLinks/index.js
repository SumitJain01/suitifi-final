import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import NavigateNext from '../styled/NavigateNext';

function MobileAccountLinks({ linksData, className }) {
  const lastItemIndex = linksData.length - 1;

  return (
    <Wrapper className={className || ''}>
      {linksData.map((navItem, index) => (
        <li key={navItem.name}>
          <Link prefetch={false} href={navItem.val} passHref>
            <a className={`nav-link${index === lastItemIndex ? ' last-item' : ''}`}>
              <i className="nav-icon">
                {navItem.icon}
              </i>
              <p className="nav-text">
                {navItem.name}
              </p>
              <NavigateNext />
            </a>
          </Link>
        </li>
      ))}
    </Wrapper>
  );
}


const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  
  li {
    list-style: none;
  }
  
  .nav-link {
    padding: 0.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.general.themeFontBlack};
    
    &:not(.last-item) {
      border-bottom: 1px solid ${props => props.theme.colors.smoke};
    }
  }
  
  i.nav-icon {
    flex-basis: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.general.primaryColor};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.general.primaryColor};
    
    svg {
      max-height: 50%;
      fill:${props => props.theme.general.primaryColor};
    }
  }
  
  .nav-text {
    margin: 0;
    margin-left: 1.125rem;
    font-size: 0.875rem;
    line-height: 1.75rem;
    letter-spacing: -0.34px;
    text-align: left;
    flex-grow: 1;
    color: #000000;
  }
`;

export default styled(MobileAccountLinks)``;
