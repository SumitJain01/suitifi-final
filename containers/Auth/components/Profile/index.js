import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { userCircleO } from 'shared/components/Icons';
import MainText from 'shared/components/PageLayout/styled/MainText.js';
import SubText from 'shared/components/PageLayout/styled/SubText.js';

function Profile({
  name,
  email,
  phone,
  className,
}) {
  return (
    <div className={`${className} profile-wrapper`}>
      <Icon className="profile-icon" icon={userCircleO} size={32} />
      <div className="info">
        <MainText className="profile-name">{name && name}</MainText>
        <SubText className="profile-info">{phone && phone}</SubText>
      </div>
    </div>
  )
}

export default styled(Profile)`
  margin: 0.75rem 0.75rem 1.25rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  
  .profile-icon {
    color: ${props => props.theme.general.primaryColor};
  }
  .profile-name {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
  }
  .profile-info {
    font-size: 0.8rem;
    color: ${props => props.theme.general.themeFontBlack};
  }
`;
