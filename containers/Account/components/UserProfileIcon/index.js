import React from 'react';
import styled from 'styled-components';
import ProfileIcon from 'shared/components/ReviewList/components/ProfileIcon';

function UserProfileIcon({ name, className = '' }) {
  return (
    <StyledProfileIcon name={name} className={className} />
  );
}

const StyledProfileIcon = styled(ProfileIcon)`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  line-height: 1em;
  font-weight: 700;
  border: 3px solid #0000001A;
  background-color: #EBEBEB;
  color: ${props => props.theme.general.primaryColor};
`;

export default styled(UserProfileIcon)``;
