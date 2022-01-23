import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editUserAddressRequest, deleteUserAddressRequest } from 'containers/Account/redux/actions';
import ConfirmModal from 'containers/Account/components/styled/ConfirmModal';
import MobileAddressItem from './components/MobileAddressItem';
import MobileEditor from './components/AddressEditor/MobileEditor';

function MobileAddresses({ addresses, editUserAddressRequest, deleteUserAddressRequest, className }) {
  const [shouldConfirmDelete, setShouldConfirmDelete] = useState(false);
  const [showAddressEditor, setShowAddressEditor] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  
  return (
    <div className={className}>
      {(showAddressEditor) ? <MobileEditor
          address={selectedAddress}
          editUserAddressRequest={editUserAddressRequest}
          setShowAddressEditor={setShowAddressEditor}
        />
        
        : (<Fragment>
          <h2 className="mx">Your Addresses</h2>
          {(addresses && addresses.length > 0) ? addresses.map(address => (<Fragment key={address.id}>
            <MobileAddressItem className="mx" address={address} />
            <div className="mx action-buttons">
              <button
                className="edit"
                onClick={() => {
                  setShowAddressEditor(true);
                  setSelectedAddress(address);
                }}
              >Edit</button>

              <button
                className="delete"
                onClick={() => {
                  setShouldConfirmDelete(true);
                  setSelectedAddress(address);
                }}
              >Delete</button>
            </div>
            <hr className="separator" />
          </Fragment>))
            
          : <div className="mx empty-addresses">You have no saved addresses.</div>
          }
        </Fragment>)
      }
      
      {(shouldConfirmDelete) && <ConfirmModal
        isMobile
        message="Are you sure want to delete this address?"
        confirmHandler={() => {
          deleteUserAddressRequest(selectedAddress);
          setShouldConfirmDelete(false);
          setSelectedAddress(null);
        }}
        cancelHandler={() => {
          setShouldConfirmDelete(false);
          setSelectedAddress(null);
        }}
      />
      }
    </div>
  );
}

const StyledMobileAddresses = styled(MobileAddresses)`
  font-family: Roboto, sans-serif;

  margin: 1rem 0 0;
  
  .mx {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  h2 {
    font-size: 1.15rem;
    line-height: 1.4;
    color: ${props => props.theme.general.primaryColor};
  }
  
  .action-buttons {
    button {
      padding: 0px;
      color: ${props => props.theme.general.primaryColor};
      font-family: Roboto, sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1.5;
    }
    button.delete {
      margin-left: 2rem;
    }
  }

  hr.separator {
    border: 0px;
    border-bottom: 1px solid ${props => props.theme.colors.smoke};
  }
  
  ${ConfirmModal} {
    .cancel-btn, .confirm-btn {
      width: 50px;
    }
  }
  
  .empty-addresses {
    text-align: center;
    margin-top: 1rem;
  }
  
`;

const mapDispatchToProps = dispatch => ({
  editUserAddressRequest: bindActionCreators(editUserAddressRequest, dispatch),
  deleteUserAddressRequest: bindActionCreators(deleteUserAddressRequest, dispatch),
});

export default connect(null, mapDispatchToProps)(StyledMobileAddresses);
