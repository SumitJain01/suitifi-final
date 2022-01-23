import getDeliveredDateFromSH from './getDeliveredDateFromSH';
import dateConvert from 'utils/helpers/dateConvert';

export default function getDeliveredOn(shipment) {
  let deliveredDate;
  try {
    const deliveredDateObj = getDeliveredDateFromSH(shipment.status_history);
    
    deliveredDate = deliveredDateObj && dateConvert(
      new Date(deliveredDateObj.created_at),
      "MON DD, YYYY"
    );
  } catch (error) {
    console.error('Error While Getting Delivered Date');
    console.error(error);
  }
  return deliveredDate;
}
