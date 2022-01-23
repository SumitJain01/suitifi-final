import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import theme from 'theme';
import { pick, omit, compose } from 'ramda';
import { renameKeys } from 'ramda-adjunct';
import * as globalActionCreators from 'containers/Global/redux/actions';
import * as actionCreators from 'containers/Account/redux/actions';
import PinIcon from 'shared/components/SVGIcons/PinIcon';
import Title from 'containers/Checkout/components/styled/Title';
import Wrapper from './styled/Wrapper';

import Card from './Card';
import AddressEditor from '../AddressEditor';

const transformAddressForUpdation = compose(
  renameKeys({
    id: 'address_id',
  }),
  omit(['region_id'])
);

function AddressItem({
  address,
  editHandler,
  deleteHandler,
  className,
}) {
  // const addrString = `
  //   ${address.street[0]}, 
  //   ${address.street[1] ? address.street[1] : ''}
  //   ${address.city}, 
  //   ${address.region}, 
  //   ${address.postcode}`
  //   .trim();

  const username = `${address.firstname} ${address.lastname}`;
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postcode}`;

  // const openEditor = useCallback(() => {
  //   openModal({
  //     content: <AddressEditor initialValues={transformAddressForUpdation(address)} editAddress={editUserAddressRequest} />,
  //     // onClose: () => fetchUserInfoRequest(),
  //     hideCloseIcon: true,
  //     title: 'EDIT ADDRESS',
  //   });
  // }, [address]);

  return (
    <Wrapper className={`address-item ${className || ''}`}>
      <Title className="title" weight={700} color={theme.colors.mediumGray}>
        <PinIcon className="pin-icon" />Home
      </Title>
      
      <span className= "name"> {username} </span>
    
      <address>
      {fullAddress}
      </address>

      <span className="phone-number">{address.telephone}</span>

      <div className="action-buttons">
        <button className="edit" onClick={() => editHandler(address)}>Edit</button>
        <button className="delete" onClick={() => deleteHandler(address)}>Delete</button>
      </div>
    </Wrapper>
  );
}

// const mapDispatchToProps = dispatch => bindActionCreators(
//   Object.assign(
//     pick([
//       'fetchUserInfoRequest',
//       'editUserAddressRequest',
//       'deleteUserAddressRequest',
//     ], actionCreators),
//     pick(['openModal'], globalActionCreators)
//   ),
//   dispatch,
// );

export default styled(AddressItem)``;
