import React, { Fragment, useState, useEffect } from 'react';
import { last, pick, splitEvery } from 'ramda';
import { noop } from 'ramda-adjunct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import withLoader from 'hoc/withLoader';
import Link from 'next/link';
import { makeSelectLoading, makeSelectCreditBalance, makeSelectCreditHistory } from 'containers/Account/redux/selectors';
import * as accountActionCreators from 'containers/Account/redux/actions';
import dateConvert from 'utils/helpers/dateConvert';
import MobileWallet from './MobileWallet';
import TotalMamacash from './TotalMamacash';
import DesktopHistoryItem from './MamacashHistoryItem';
import MobileHistoryItem from './MamacashHistoryItem/Mobile';
import HistoryWrapper from './styled/HistoryWrapper';
import Button from './styled/Button';

function CustomerWallet({ creditBalance, creditHistory, getCreditBalanceRequest, isMobile }) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedHistory = splitEvery(10, creditHistory);
  
  const lastPage = paginatedHistory.length;
  const isMoreAvailable = lastPage > currentPage;
  
  const getMamaHistoryItem = (transaction) => {
    const processed = processTransaction(transaction);
    const { isDebit, changedAbsoluteAmount, transactionDate, orderId, updated_at } = processed;
    
    if (isMobile) {
      return (
        <MobileHistoryItem
          isDebit={isDebit}
          changedAbsoluteAmount={changedAbsoluteAmount}
          transactionDate={transactionDate}
          orderId={orderId}
          key={updated_at}
        />
      )
    }

    return (
      <DesktopHistoryItem
        isDebit={isDebit}
        changedAbsoluteAmount={changedAbsoluteAmount}
        transactionDate={transactionDate}
        orderId={orderId}
        key={updated_at}
      />
    );
  };
  
  const cashbackHistory = paginatedHistory.map((page, index) => {
    if (index >= currentPage) return null;
    
    return (
      <div className={index + 1 === currentPage ? 'current-page' : ''} id={`cashback-page-${index + 1}`} key={index}>
        {page.map(transaction => getMamaHistoryItem(transaction))}
      </div>
    )
  });
  
  const next = () => {
    setCurrentPage((current) => current + 1);
  };

  useEffect(() => {
    getCreditBalanceRequest();
  }, []);

  if (isMobile) {
    return (
      <MobileWallet
        creditBalance={creditBalance}
        renderedHistory={cashbackHistory}
        currentPage={currentPage}
        next={next}
        isMoreAvailable={isMoreAvailable}
        hasHistory={Boolean(creditHistory.length)}
      />
    );
  }

  return (
    <Fragment>
      <TotalMamacash amount={creditBalance} hasHistory={Boolean(creditHistory.length)} />
      {!Boolean(creditHistory.length) ? (
        <Link prefetch={false} href="/products">
          <Button>shop now</Button>
        </Link>
      ) : (
        <HistoryWrapper>
          <p className="section-header">Cashback History</p>
          
          {cashbackHistory}
          
          {(isMoreAvailable) && (
            <Button as="a" href={`#cashback-page-${currentPage}`} onClick={next}>Show More</Button>
          )}
        </HistoryWrapper>
      )}
    </Fragment>
  );
}

function processTransaction(transaction) {
  const orderId = transaction.additional_info && last(transaction.additional_info.split('#'));
  const changedAmount = transaction.balance_change && Number.parseFloat(transaction.balance_change); // - 0.5289
  const changedInt = Number.parseInt(changedAmount); // -0
  const changedAbsoluteAmount = Math.abs(changedInt); // 0
  const isDebit = changedAmount <= 0; // true
  const transactionDate = transaction.updated_at && dateConvert(
    new Date(transaction.updated_at.split("-").join("/")),
    'DD MONTH, YYYY'
  );

  return {
    ...transaction,
    isDebit,
    changedAbsoluteAmount,
    transactionDate,
    orderId,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(pick(['getCreditBalanceRequest'], accountActionCreators), dispatch);

const mapStateToProps = createStructuredSelector({
  creditBalance: makeSelectCreditBalance(),
  creditHistory: makeSelectCreditHistory(),
  loading: makeSelectLoading(),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withLoader(
    CustomerWallet
  )
);

CustomerWallet.propTypes = {
  creditHistory: PropTypes.array,
  getCreditBalanceRequest: PropTypes.func,
  creditBalance: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

CustomerWallet.defaultProps = {
  creditHistory: [],
  creditBalance: false,
  getCreditBalanceRequest: noop,
};
