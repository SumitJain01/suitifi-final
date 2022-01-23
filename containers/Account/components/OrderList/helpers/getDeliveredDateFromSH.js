import { isNonEmptyArray } from 'ramda-adjunct';

export default function getDeliveredDateFromSH(status_history) {
  const findInHistory = term => {
    return (
      isNonEmptyArray(status_history) &&
      status_history.find(
        item => item.status && item.status.toLowerCase() === term,
      )
    );
  };

  const deliveredFound = findInHistory('DELIVERED'.toLocaleLowerCase());
  
  return deliveredFound;
}
