import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query MyQuery {
    posts(limit: 10) {
      content
      title
      id
    }
  }
`;
