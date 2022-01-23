import { addressToMageFormat } from 'utils/helpers/checkout/transformers';

export function makeDataForApplyAddressRequest(values) {
  const { notes } = values;
  const address = addressToMageFormat(values);

  return {
    shippingAddress: address,
    billingAddress: address,
    notes,
  };
}

