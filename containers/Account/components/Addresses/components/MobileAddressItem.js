import React from 'react';
import styled from 'styled-components';

function MobileAddressItem({
  address,
  className,
}) {
  const username = `${address.firstname} ${address.lastname}`;
  const tag = ['Home', 'Office'][Math.floor(Math.random() * 2)];
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postcode}`; // dummy

  return (
    <Wrapper className={className || ''}>
      <div className="address-info">
        <p className="name">{username}</p>
        <p className="full-address">
          {fullAddress}
        </p>
        <p className="phone-number">
          {address.telephone}
        </p>
      </div>
      <div className="tag-container">
        <p className="tag">{tag}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${props => props.theme.general.themeFontBlack};
  
  padding: 1rem 0 0.5rem;
  
  display: grid;
  grid-template-columns: auto auto;
  
  .name {
    margin: 0px;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.5em;
    text-transform: capitalize;
  }
  
  .full-address, .phone-number {
    margin: 0px;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.1rem;
  }
  
  .phone-number {
    margin-top: 0.75rem;
  }
  
  .tag-container {
    display: flex;
    justify-content: flex-end;
    
    .tag {
      margin: 0px;
      width: fit-content;
      height: fit-content;
      background-color: ${props => props.theme.colors.smoke};
      border: 1px solid #989898;
      border-radius: 5px;
      padding: 0 0.5rem;
      
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.4rem;
    }
  }
`;

export default styled(MobileAddressItem)``;
