import React from 'react';
import styled from 'styled-components';

function ProfileCard({ user }) {
  const username = `${user?.firstName} ${user?.lastName}`;
  const email = user?.email;
  const phone = user?.phone;
  
  return (
    <Wrapper>
      <div className="card-container">
        <div className="card-image">
          <img src="/static/mamaearth/avatar.png" alt="avatar"></img>
        </div>
        <div className="card-info">
          <div className="user-name">
            <h3>{username}</h3>
          </div>
          <div className="email">
            <span>Email: {email}</span>
          </div>
          <div className="phone">
            <span>Mobile: {phone}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.card-container {
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  width: 60%;
  margin: auto;
  margin-top: 2.2em;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.1); 
  background: #ffffff;
  border-radius: 5px;
}
.card-info {
  margin-left: 1em;
  color: #000000;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.card-image {
  width: 40%;
}
.card-image img {
  width: 100%;
  height: auto;
}
.user-name {
  font-weight: 700;
}
@media only screen and (max-width: 767px) {
  .card-container {
    flex-direction: column;
    margin: 2em auto;
  }
  .card-image {
    width: 100%;
    margin-bottom: 1.3em;
  }
  .card-info {
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    width: 100%;
  }
}
`;

export default ProfileCard;