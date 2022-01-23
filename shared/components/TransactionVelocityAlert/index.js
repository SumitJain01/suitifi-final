import React, { Component } from 'react';
import { COD_LIMIT, PREPAID_LIMIT } from 'utils/constants';
import SweetAlert from 'sweetalert2-react';

export default class TransActionVelocityAlert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <SweetAlert
          show={this.props.show}
          title="Transaction limit exceeds"
          onConfirm={() => this.props.showHandler(false)}
          confirmButtonText="Okay"
          confirmButtonColor="#41A8DD"
          html={`Transaction limit for Prepaid order is ${PREPAID_LIMIT}, and COD order is ${COD_LIMIT}. Please retry again`}
        />
      )
    }
    else {
      return null;
    }
  }
}
