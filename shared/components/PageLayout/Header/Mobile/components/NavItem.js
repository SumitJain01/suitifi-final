import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { StyledNavItem } from '../NavStyles';
import SubText from '../../../styled/SubText';

const NavItem = ({ isLoggedIn, showLoginPopUp, data, pathname, close, previewContent, className }) => {
  return (
    !isLoggedIn && data.val.includes('my-account')
    ?
    <StyledNavItem 
      as="a" 
      onClick={()=>{ showLoginPopUp(); close(); }} 
      className={`${className || ''}${pathname === data.val ? ' isCurrent' : ''}`}
    >
        <div/>
        <SubText>{data.name}</SubText>
        <div className="preview-content">{data.previewContent || previewContent || ''}</div>
      </StyledNavItem>
    :
    <Link prefetch={false} href={data.val} passHref>
      <StyledNavItem as="a" onClick={()=>{ close() }} className={`${className || ''}${pathname === data.val ? ' isCurrent' : ''}`} >
        <div/>
        <SubText>{data.name}</SubText>
        <div className="preview-content">{data.previewContent || previewContent || ''}</div>
      </StyledNavItem>
    </Link>
  );
};

export default styled(NavItem)``;
