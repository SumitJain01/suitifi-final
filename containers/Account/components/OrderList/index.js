import React, { useState, Fragment, useEffect } from 'react';
import { path, compose, propOr, pathOr } from 'ramda';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import withLoader from 'hoc/withLoader';
import { useRouter } from 'next/router';
import { makeSelectLoading, makeSelectAccountError, makeSelectCreditHistory } from 'containers/Account/redux/selectors';
import { makeUTMParams } from "containers/Checkout/redux/selectors";
import { makeSelectUser, makeSelectUserId } from "containers/Auth/redux/selectors";
import { makeSelectTotalProductQty } from "containers/Cart/redux/selectors";
import { makeSelectUserInfo } from "containers/Account/redux/selectors";
import { setCOSM } from 'containers/Account/redux/actions';
import cogotoast from 'cogo-toast';
import axios from 'axios';
import request from 'lib/request';
import config from 'config/env';
import OrdersUI from './OrdersUI';
import ShouldCancelModal from './ShouldCancelModal';
import OrderCancellationSuccess from './OrderCancellationSuccess';
import makeClevertap from 'lib/makeClevertap';
import { makeSelectIsCOSM } from 'containers/Account/redux/selectors';
import { PAGE_LIMIT } from 'utils/constants';

const clevertap = makeClevertap();
const { apiUrl } = config;

function OrderList({
  loading,
  accountDataError,
  trackingData,
  user,
  quantity,
  COSM,
  setCOSM,
  userId
}) {
  let token, userID, headers;
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [orderPageNumber, setOrderPagenumber] = useState(1);
  const [noMoreOrders, setNoMoreOrders] = useState(false);

  const updateOrderPageNumber = (pageNumber) => {
    setOrderPagenumber(pageNumber);
  }

  const fetchOrders = async () => {
    const requestURL = `${apiUrl}/users/fetchOrders/${userId}?pagenumber=${orderPageNumber}&pagelimit=${PAGE_LIMIT}`;
    try {
      const data = await request(requestURL);
      setOrders(orders => [...orders, ...data]);
      if (Array.isArray(data) && !data.length) {
        setNoMoreOrders(true);
      }
    } catch (error) {
      console.log(`Error fetching orders`, error);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [orderPageNumber]);
  
  useEffect(() => {
    const handler = () => {
      setCOSM(false);
      resetComponentState();
    };
    window.addEventListener('popstate', handler);
    router.events.on('routeChangeComplete', handler);
    
    return () => {
      router.events.off('routeChangeComplete', handler);
      window.removeEventListener('popstate', handler);
    };
  }, []);

  let cancelOrderRequest = (entityID, reason, reasonDesc) => {
    setHeaders();
    const reasonDescription = `issueType=${reason}${reasonDesc && `,reason=${reasonDesc}`}`
    axios
      .post(
        `${apiUrl}/carts/cancelOrder`,
        {
          entityId: entityID,
          userId: userID,
          reason: reasonDescription,
        },
        {
          headers: headers,
        },
      )
      .then(resp => {
        setCOSM(true);
        setCOSMisCOD(
          pathOr(false, ['payment', 'method'], currentOrder)
          .toString() === 'cashondelivery'
        );
        setModalOpen(false);
        setLoadingIndex(-1);
        cancelOrderClevertap(reason);
      })
      .catch(err => {
        console.log(err);
        cogotoast.error("Can't cancel your order. Please contact support!");
        setModalOpen(false);
        setLoadingIndex(-1);
      });
  };

  function setHeaders() {
    token =
      localStorage.getItem('pwaState') &&
      path(
        ['auth', 'data', 'token', 'accessToken'],
        JSON.parse(localStorage.getItem('pwaState')),
      );

    headers = {
      Authorization: `Bearer ${token}`,
    };

    userID =
      localStorage.getItem('pwaState') &&
      path(
        ['auth', 'data', 'user', 'id'],
        JSON.parse(localStorage.getItem('pwaState')),
      );
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  //State Related to cancel order modal
  //COSM = Cancel Order Success Modal
  const [COSMisCOD, setCOSMisCOD] = useState(false); //COSMisCOD is whether cancelled order is COD or not
  
  const cancelOrderProps = {
    cancelOrder: (index, method) => {
      setModalOpen(true);
      setLoadingIndex(index);
      setCOSMisCOD(method == "cashondelivery");
    },
    COSM,
    setCOSM,
    COSMisCOD,
    setCOSMisCOD,
    loadingIndex,
    setLoadingIndex,
  };
  const ordersUIProps = {
    orders: orders,
    currentOrder,
    setCurrentOrder,
    loading,
    accountDataError,
    ...cancelOrderProps,
  };
  
  const shouldCancelModalProps = {
    cancelHandler: (reason, reasonDesc) => {
      cancelOrderRequest(currentOrder.entity_id, reason, reasonDesc); 
    },
    setLoadingIndex,
    setModalOpen
  };

  function resetComponentState() {
    setModalOpen(false);
    setCurrentOrder(false);
    setLoadingIndex(-1);
    setCOSMisCOD(null);
  }

  function cancelOrderClevertap(reason) {
    if (user) {
      clevertap.event.push('orderCancel', {
        platform: 'mewebsite',
        ...trackingData,
        timeStamp: new Date().getTime(),
        paymentMethod: currentOrder.payment.method,
        purchaseAmount: currentOrder.grand_total,
        cartAmount: currentOrder.base_subtotal_incl_tax,
        quantity,
        purchaseDate: currentOrder.created_at,
        cancelReason: reason,
        gaUserId: user.id,
        orderAddressCity: currentOrder.billing_address.city,
        orderAddressPin: Number(currentOrder.billing_address.postcode),
        userName: user.firstName + ' ' + user.lastName,
        phone: user.phone,
        email: user.email,
        quantity: currentOrder.total_qty_ordered,
      });
    }
  }
  return (
    <Fragment>
      { (!COSM) && 
        <OrdersUI 
          {...ordersUIProps} 
          pageNumber={orderPageNumber} 
          updateOrderPageNumber={updateOrderPageNumber} 
          noMoreOrders={noMoreOrders} 
        />
      }
      
      {(!COSM && modalOpen) && (
        <ShouldCancelModal {...shouldCancelModalProps} />
      )}

      {COSM && 
        <OrderCancellationSuccess 
          isCOD={COSMisCOD} 
          user={user} 
          trackingData={trackingData} 
        />
      }
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  setCOSM: bindActionCreators(setCOSM, dispatch)
});

const mapStateToProps = createStructuredSelector({
  userId: makeSelectUserId(),
  creditHistory: makeSelectCreditHistory(),
  loading: makeSelectLoading(),
  accountDataError: makeSelectAccountError(),
  user: makeSelectUser(),
  addresses: compose(propOr(false, "addresses"), makeSelectUserInfo()),
  trackingData: makeUTMParams(),
  quantity: makeSelectTotalProductQty(),
  COSM: makeSelectIsCOSM(),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withLoader(
    OrderList
  )
);

OrderList.propTypes = {
  orders: PropTypes.array,
  loading: PropTypes.bool,
};

OrderList.defaultProps = {
  orders: [],
  loading: true,
};
