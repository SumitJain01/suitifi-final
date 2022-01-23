import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { userCircleO } from 'shared/components/Icons';
import Link from 'next/link';

function Guest({ className = '' , showLoginPopUp }) {
  return (
    <div className={className}>
      <Icon className="guest-user-icon" icon={userCircleO} size={22} />
      <p className="salutations">Hi Guest
          <a onClick={showLoginPopUp} className="sign-in-link">Sign In</a>
      </p>
    </div>
  );
}

export default styled(Guest)`
  font-family: Roboto, sans-serif;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  
  .guest-user-icon {
    color: ${props => props.theme.colors.mediumGray};
  }
  
  .salutations {
    margin: 0px;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.4em;
    text-transform: capitalize;
    color: ${props => props.theme.general.themeFontBlack};
  }

  .sign-in-link {
    margin: 0px;
    margin-left: 1em;
    font-size: 0.925rem;
    font-weight: 400;
    line-height: 1em;
    color: ${props => props.theme.general.primaryColor};
  }
`;
