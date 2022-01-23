import { gql } from "@apollo/client";

export const createGuestCartMutation = gql`
mutation {
  createEmptyCart
}
`;
export const setGuestEmailMutation = gql`
mutation setGuestEmailOnCart(
  $cartId: String!
  $email: String!
) {
  setGuestEmailOnCart(input: {
    cart_id: $cartId
    email: $email
  }) {
    cart {
      email
    }
  }
}
`;

export const setPaymentMutation = gql`
mutation setPaymentMethodOnCart(
  $cartId: String!
) {
  setPaymentMethodOnCart(input: {
    cart_id: $cartId
    payment_method: {
        code: "cashondelivery"
    }
}) {
  cart {
    selected_payment_method {
      code
    }
  }
}
}
`;
export const placeOrderMutation = gql`
mutation placeOrder(
  $cartId: String!
){
  placeOrder(input: {cart_id:  $cartId}) {
    order {
      order_number
    }
  }
}
`;

export const deliveryMethodMutation = gql`
mutation setShippingMethodsOnCart(
  $cartId: String!
) {
  setShippingMethodsOnCart(input: {
    cart_id: $cartId
    shipping_methods: [
      {
        carrier_code: "freeshipping"
        method_code: "freeshipping"
      }
    ]
  }) {
    cart {
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          method_code
          carrier_title
          method_title
        }
      }
    }
  }
}

`;
export const addSimpleProductsToCartMutation = gql`
mutation addSimpleProductsToCart(
  $cartId: String!
  $sku: String!
) {
  addSimpleProductsToCart(
    input: {
      cart_id: $cartId
      cart_items: [
        {
          data: {
            quantity: 1
            sku: $sku
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        product {
          name
          sku
          stock_status
          image {
            url
          }
          price_range {
            minimum_price {
              final_price {
                currency
                value
              }
            }
          }
        }
        quantity
      }
    }
  }
}
`;
export const billingAddressMutation = gql`
mutation setBillingAddressOnCart(
  $cartId: String!
  $firstname: String!
  $lastname: String!
  $street: [String]!
  $city: String!
  $region: String!
  $postcode: String!
  $telephone: String!
  ){
  setBillingAddressOnCart(
    input: {
      cart_id: $cartId
      billing_address: {
        address: {
          firstname: $firstname
          lastname: $lastname
          company: "Suitifi"
          street: $street
          city:  $city
          region:  $region
          region_id: 12
          postcode: $postcode
          country_code: "US"
          telephone: $telephone
          save_in_address_book: false
        }
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        country {
          code
          label
        }
      }
    }
  }
}

`;

export const shippingAddressMutation = gql`
mutation setShippingAddressesOnCart(
  $cartId: String!
  $firstname: String!
  $lastname: String!
  $street: [String]!
  $city: String!
  $region: String!
  $postcode: String!
  $telephone: String!
){
  setShippingAddressesOnCart(
    input: {
      cart_id: $cartId
      shipping_addresses: [
        {
          address: {
            firstname: $firstname
            lastname: $lastname
            company: "Suitifi"
            street: $street
            city:  $city
            region:  $region
            region_id: 12
            postcode: $postcode
            country_code: "US"
            telephone: $telephone
            save_in_address_book: false
          }
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
        country {
          code
          label
        }
        available_shipping_methods{
          carrier_code
          carrier_title
          method_code
          method_title
        }
      }
    }
  }
}

`;