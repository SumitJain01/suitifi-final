import React from 'react';

const generateComment = (itemTotal, couponDiscount, cartMessage) => {
  let comment;
  let grandTotalWithDiscount = 0;
  if (couponDiscount) {
    grandTotalWithDiscount = (itemTotal + couponDiscount);
  }
  else {
    grandTotalWithDiscount = itemTotal;
  }

  if (cartMessage) {
    comment = cartMessage;
  }
  else {
    comment = 'Free Shipping On Orders Above Rs 399, COD Available';
    if (grandTotalWithDiscount && grandTotalWithDiscount >= 399) {
      comment = 'Congrats, Your Order is Eligible for FREE Shipping';
    } else if (grandTotalWithDiscount && grandTotalWithDiscount > 0) {
      comment = `Shop for Rs ${Math.ceil(399 - grandTotalWithDiscount)} more to Avail Free Shipping`;
    }
  }
  return comment;
};


const CartAnnouncement = ({ totalSegments, cartMessage }) => {
  const itemTotal = totalSegments.find(total => total.code === 'subtotal');
  const couponDiscount = totalSegments.find(total => total.code === 'discount');

  return (
    <div>{generateComment(itemTotal?.value, couponDiscount?.value, cartMessage)}</div>
  );
};

export default CartAnnouncement;
