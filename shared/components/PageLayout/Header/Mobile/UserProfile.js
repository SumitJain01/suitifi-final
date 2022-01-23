import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { useRouter } from 'next/router';
import { userO } from 'shared/components/Icons';
import NavigateNext from '../../styled/NavigateNext';
import MainText from '../../styled/MainText';
import SubText from '../../styled/SubText';


function UserProfile({
  isLoggedIn,
  name,
  email,
  phone,
  close,
  showLoginPopUp,
  className,
}) {
  const router = useRouter();
  const clickHandler = () => {
    if (isLoggedIn) {
      router.push('/my-account');
    } else {
      showLoginPopUp(true);
    }
    close();
  };

  return (
    <div className={className}>
      <LinkWrapper onClick={clickHandler}>
        <IconContainer>
          <Icon icon={userO} size={16} />
        </IconContainer>

        <ProfileInfo isLoggedIn={isLoggedIn} name={name} email={email} phone={phone} />

        <NavigateNext />
      </LinkWrapper>
    </div>
  );
}

const ProfileInfo = ({ isLoggedIn, name, email, phone }) => {
  return (<div className="profile-info">
    <MainText>{(isLoggedIn && name) ? name : 'Hi Guest'}</MainText>
    <SubText>{(isLoggedIn && email) ? email : 'Log In'}</SubText>
  </div>);
};

const LinkWrapper = styled.a`
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  color: #ffffff;

  &:hover {
    color: #ffffff;
  }
`;

const IconContainer = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.general.secondaryColor};
`;

export default styled(UserProfile)`
  padding-left: 0.5rem;
  padding-right: 0.75rem;
  background-color: ${({ theme }) => theme.general.primaryColor};

  ${MainText} {
    font-weight: 700;
    text-transform: capitalize;
  }

  ${SubText} {
    line-break: anywhere;
  }

  ${NavigateNext}, ${MainText}, ${SubText} {
    color: #ffffff;
  }
`;
