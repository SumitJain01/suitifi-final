import React from 'react';
import { connect } from 'react-redux';
import { isString } from 'ramda-adjunct';
import { bindActionCreators } from 'redux';
import {
  propOr,
  find,
  defaultTo,
  compose,
  converge,
  assoc,
  evolve,
  ifElse,
  identity,
  omit,
} from 'ramda';
import { createStructuredSelector } from 'reselect';
import Spinner from 'shared/components/Spinner';
import * as checkoutActionCreators from 'containers/Checkout/redux/actions';
import { makeSelectLoggedIn, makeSelectUser } from 'containers/Auth/redux/selectors';
import { makeSelectUserInfo } from 'containers/Account/redux/selectors';
import { makeSelectHasPlacedOrder, makeSelectLocalStorageAddressData } from 'containers/Checkout/redux/selectors';
import SegmentationTitle from 'shared/components/SegmentationTitle';
import Shipping from 'containers/Checkout/components/Shipping';

function AddressSegment({
  isActive,
  applyAddressData,
  isLoggedIn,
  setValid,
  setPhone,
  initialValues,
  hasUserInfo,
  checkError,
  setCheckError,
  lsAddressData
}) {
  let localStorageAddressData = lsAddressData;
  return (
    <div>
      {isActive ? <SegmentationTitle>Delivery Address</SegmentationTitle> :null}
      {
        isLoggedIn && !hasUserInfo
          ? <Spinner />
          : <Shipping
            open={isActive}
            setValid={setValid}
            setPhone={setPhone}
            initialValues={initialValues}
            sendValues={applyAddressData}
            checkError={checkError}
            setCheckError={setCheckError}
            lsAddressData={localStorageAddressData}
          />
      }
    </div>
  );
}


const mapActionsToProps = dispatch => ({
  applyAddressData: bindActionCreators(checkoutActionCreators.applyAddressData, dispatch),
});

const mapStateToProps = createStructuredSelector({
  initialValues: compose(
    omit(['id']),
    converge(assoc('email'), [
      propOr('', 'email'),
      compose(
        evolve({
          region: ifElse(
            isString,
            identity,
            propOr('', 'region'),
          ),
        }),
        defaultTo({
          country_id: 'IN',
          street: ['', ''],
          region: '',
        }),
        find(item => Boolean(item && item.default_shipping)),
        propOr([], 'addresses'),
      ),
    ]),
    makeSelectUserInfo()
  ),
  user: makeSelectUser(),
  isLoggedIn: makeSelectLoggedIn(),
  hasPlacedOrder: makeSelectHasPlacedOrder(),
  hasUserInfo: compose(Boolean, makeSelectUserInfo()),
  lsAddressData: makeSelectLocalStorageAddressData(),
});


export default connect(mapStateToProps, mapActionsToProps)(AddressSegment);
