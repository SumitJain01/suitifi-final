import React, { useCallback, useState, useRef } from 'react';
import { compose, omit } from 'ramda';
import { renameKeys } from 'ramda-adjunct';
import styled from 'styled-components';
import Wrapper from './styled/Wrapper';
import AddressEditor from '../../AddressEditor';

const transformAddressForUpdation = compose(
  renameKeys({
    id: 'address_id',
  }),
  omit(['region_id'])
);

function MobileEditor({
  address,
  editUserAddressRequest,
  setShowAddressEditor,
  className,
}) {
  const formRef = useRef();
  const [passedAddress, setPassedAddress] = useState(transformAddressForUpdation(address));
  const resetHandler = () => {
    setPassedAddress(getEmptyAddress(passedAddress));
  };
  const submitHandler = () => {
    formRef && formRef.current && formRef.current.submitForm();
  };
  const closeHandler = useCallback(() => setShowAddressEditor(false));

  return (
    <Wrapper className={className || ''}>
      <div className="header-row">
        <header className="header-title">Edit Address</header>
        <button type="reset" className="reset-btn" onClick={resetHandler}>Reset</button>
      </div>

      <AddressEditor
        formikRef={formRef}
        className="address-editor"
        initialValues={passedAddress}
        editAddress={editUserAddressRequest}
        closeHandler={closeHandler}
      />
      
      <div className="save-addr-wrapper">
        <button type="submit" className="save-addr-btn" onClick={submitHandler}>save address</button>
      </div>
    </Wrapper>
  )
}

function getEmptyAddress(address) {
  return {
    ...address,
    city: '',
    firstname: '',
    lastname: '',
    postcode: '',
    region: '',
    street: ['', ''],
    telephone: '',
  };
}

export default styled(MobileEditor)``;
