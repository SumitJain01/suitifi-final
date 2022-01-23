import React, { Fragment, useCallback, useState, useRef } from 'react';
import { compose, omit, propOr } from 'ramda';
import { isNonEmptyArray, renameKeys } from 'ramda-adjunct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomeIcon from 'shared/components/SVGIcons/HomeIcon';
import { deleteUserAddressRequest, editUserAddressRequest } from 'containers/Account/redux/actions';
import { makeSelectLoading, makeSelectUserInfo } from 'containers/Account/redux/selectors';
import Button from 'shared/components/Button';
import AddressItem from './components/AddressItem';
import AddressEditor from './components/AddressEditor';
import MobileAddresses from './MobileAddresses';
import Wrapper from './styled/Wrapper';
import ConfirmModal from 'containers/Account/components/styled/ConfirmModal';

const transformAddressForUpdation = compose(
  renameKeys({
    id: 'address_id',
  }),
  omit(['region_id'])
);

function Addresses({
  isMobile,
  addresses,
  editUserAddressRequest,
  deleteUserAddressRequest,
  className,
  user,
}) {
  const formRef = useRef();
  const [shouldConfirmDelete, setShouldConfirmDelete] = useState(false);
  const [showAddressEditor, setShowAddressEditor] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  
  const addressItemEdit = (address) => {
    setShowAddressEditor(true);
    setSelectedAddress(address);
  }
  const addressItemDelete = (address) => {
    setShouldConfirmDelete(true);
    setSelectedAddress(address);
  }

  const editSubmitHandler = useCallback(() => {
    formRef && formRef.current && formRef.current.submitForm();
    setShowAddressEditor(false);
    setSelectedAddress(null);
  });
  const deleteConfirmHandler = useCallback(() => {
    deleteUserAddressRequest(selectedAddress);
    setShouldConfirmDelete(false);
    setSelectedAddress(null);
  });
  const deleteCancelHandler = useCallback(() => {
    setShouldConfirmDelete(false);
    setSelectedAddress(null);
  });

  if (isMobile) {
    return <MobileAddresses user={user} addresses={addresses} />;
  }
  
  return (
    <Fragment>
      <Wrapper className={className || ''}>
        {(!showAddressEditor) ? (
          <Fragment>
            <div className="section-header">
              <HomeIcon className="home-icon"/>
              YOUR ADDRESSES
            </div>
            {(isNonEmptyArray(addresses)) ? (
              <div className="address-items-container">
                {addresses.map(address => (
                  <AddressItem
                    address={address}
                    editHandler={addressItemEdit}
                    deleteHandler={addressItemDelete}
                    key={address.id}
                  />
                ))}
              </div>
            ) : <div>You have no saved addresses.</div>}
          </Fragment>
        ) : (
          <Fragment>
            <div className="section-header">Edit Address</div>
            <AddressEditor
              initialValues={transformAddressForUpdation(selectedAddress)}
              closeHandler={editSubmitHandler}
              editAddress={editUserAddressRequest}
              formikRef={formRef}
            />
            <Button className="edit-save-btn" onClick={() => editSubmitHandler()}>Save Address</Button>
          </Fragment>
        )}
      </Wrapper>

      {(shouldConfirmDelete) && (
        <ConfirmModal
          message="Are you sure want to delete this address?"
          confirmMessage="Delete"
          cancelMessage="Cancel"
          confirmHandler={deleteConfirmHandler}
          cancelHandler={deleteCancelHandler}
        />
      )}
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  editUserAddressRequest: bindActionCreators(editUserAddressRequest, dispatch),
  deleteUserAddressRequest: bindActionCreators(deleteUserAddressRequest, dispatch)
})

const mapStateToProps = createStructuredSelector({
  addresses: compose(propOr(false, 'addresses'), makeSelectUserInfo()),
  loading: makeSelectLoading(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
