import { gql } from "@apollo/client";

export const loadUsers = gql`
  query {
    getAllUsers {
      id
      firstName
      email
      password
    }
  }
`;

export const loadProductsByCategoryQuery = gql`
  query loadProductsByCategory($category_id: String!){
      products(filter: { category_id: { eq: $category_id } }) {
        total_count
        items {
          id
          name
          sku
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
      }
    }
`;
export const grandTotalQuery = gql`
query grandTotal( $cartId: String! ){
  cart(cart_id: $cartId) {    
      
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
    }
  }
}

`;