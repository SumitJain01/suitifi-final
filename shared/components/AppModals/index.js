/* eslint-disable react/no-multi-comp */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Portal from 'shared/components/Portal';
import Overlay from 'shared/components/Overlay';
import PropTypes from 'prop-types';
import { makeSelectAppModals } from 'containers/Global/redux/selectors';
import { closeModal } from 'containers/Global/redux/actions';
import Modal from '../Modal';

class Modals extends Component {
  render() {
    const modals = this.props.modals.map((item, i) => (
      <Portal key={item.id}>
        <Modal
          zIndex={i}
          item={item}
          closeModalAction={() => this.props.closeModal(item)}
        />
      </Portal>
    ));

    return (
      <Fragment>
        <Overlay open={modals.length} />
        {modals}
      </Fragment>
    );
  }
}
Modals.propTypes = {
  closeModal: PropTypes.func,
  modals: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  closeModal: bindActionCreators(closeModal, dispatch),
});

const mapStateToProps = createStructuredSelector({
  modals: makeSelectAppModals(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modals);
