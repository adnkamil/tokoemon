import { gql } from "@apollo/client";

export const FETCH_FAVORITES = gql`
  query {
    favorites @client
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      classification
      types
      image
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;
