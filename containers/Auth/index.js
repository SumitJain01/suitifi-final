import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginFlow from './components/LoginFlow';
import Overlay from 'shared/components/Overlay';
import ScrollLock from 'shared/components/ScrollLock';
import styled from 'styled-components';

function AuthContainer({ loggedIn, isPage, hideLoginPopUp }) {
  const router = useRouter();
  useEffect(() => {
    if (loggedIn) {
      router.push('/');
      hideLoginPopUp();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <LoginCard isPage={isPage}>
        <ScrollLock />
        <Overlay open={true}/>
        <div className="modal-style">
          <LoginFlow />
        </div>
      </LoginCard>
    );
  }
  return null;
}

const LoginCard = styled.div`
.modal-style {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 485px;
  z-index:1001;
  background-color:#ffffff;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
 
}
.modal-style::-webkit-scrollbar {
  display: none;
}

.gap{
  margin-top:2rem;
}
@media only screen and (max-width:767px){
  .modal-style{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform:none;
    border-radius:0;
    overflow-y: scroll;
  }
}
`;

export default AuthContainer;
