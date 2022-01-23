import React from 'react';
import { isEmpty } from 'ramda';
import List from './List';

const ListWrapper = (props) => {
  if (isEmpty(props.data)) {
    return null;
  }
  return <List {...props} />;
};

// ListWrapper.propTypes = {
//   data: PropTypes.shape({
//     rows: PropTypes.array.isRequired,
//     count: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   const formattedTableData = ownProps.data && utils.pickByKeys(ownProps.data.rows, ownProps.model);
//   const mappedData = utils.appendActionColumn(formattedTableData, ownProps.actionColumn);
//   return Object.assign({
//     mappedData,
//   }, ownProps, stateProps, dispatchProps);
// };

export default ListWrapper;
