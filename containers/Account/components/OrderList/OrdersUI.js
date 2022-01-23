import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { isEmptyArray, isNonEmptyArray } from 'ramda-adjunct';
import detectMobile from 'utils/helpers/mobileDetect';
import { ViewMoreBtn } from './OrdersUI.styled';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import OrdersListingHeader from './OrdersListingHeader';
import Spinner from 'shared/components/Spinner';

export default OrdersUI;

function OrdersUI(props) {
  const { orders, currentOrder, setCurrentOrder, cancelOrder, loading, accountDataError, pageNumber, updateOrderPageNumber, noMoreOrders } = props;
  const loadingIndexRef = useRef();
  const previouslyViewed = useRef();

  const openDetails = (order, index) => {
    loadingIndexRef.current = index;
    setCurrentOrder(order);
  };

  const closeDetails = () => {
    previouslyViewed.current = currentOrder.increment_id;
    setCurrentOrder(false);
  };

  const isMobile = detectMobile();

  useEffect(() => {
    const element = window.document.getElementById(
      String(previouslyViewed.current),
    );
    element && element.scrollIntoView();
    previouslyViewed.current = undefined;
  }, [previouslyViewed.current]);

  const showLoading = !currentOrder && isEmptyArray(orders) && !loading && accountDataError === false && !noMoreOrders;
  const showOrdersList = !currentOrder && accountDataError === false && isNonEmptyArray(orders);
  const showKnowMore =
    !currentOrder && accountDataError === false && isNonEmptyArray(orders) && !noMoreOrders;
  const showNoOrders = !currentOrder && !loading && (accountDataError === false) && noMoreOrders && isNonEmptyArray(orders);

  return (
    <Wrapper>
      <OrdersListingHeader
        currentOrder={currentOrder}
        closeDetails={closeDetails}
      />
      
      {showLoading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}

      {showOrdersList && (
        <div className="orders-listing">
          {orders.map((order, index) => (
            <OrderItem
              key={order.increment_id}
              order={order}
              isMobile={isMobile}
              viewDetails={() => openDetails(order, index)}
            />
          ))}
        </div>
      )}

      {showKnowMore && (
        <KnowMoreBtn onClick={() => { updateOrderPageNumber(pageNumber + 1) }}>Know More</KnowMoreBtn>
      )}

      {showNoOrders && (
        <div className="no-more-orders">No more orders are available!</div>
      )}

      {currentOrder && (
        <OrderDetails
          order={currentOrder}
          orderIndex={loadingIndexRef.current}
          cancelOrder={cancelOrder}
          isMobile={isMobile}
        />
      )}
    </Wrapper>
  );
}

const KnowMoreBtn = styled(ViewMoreBtn)`
  display: block;
  margin: 1rem auto 0;
  
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  color: ${props => props.theme.general.themeFontBlack};

  .no-orders {
    @media (max-width: 1023px) {
      margin-left: 1rem;
    }
  }

  .orders-listing{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } 

  .no-more-orders {
    text-align: center;
    font-weight: 500;
    color: ${props => props.theme.colors.mediumGray};
  }
  
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    margin: 3rem;
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4em;
    
    &.mamacash {
      margin: 1rem 0 1rem;
      text-align: left;
      color: ${({ theme }) => theme.general.primaryColor};
      
      @media only screen and (max-width: 768px) {
        margin: 0 0 1rem 1rem;
      }
    }
  }  
`;
