import { gql } from "@apollo/client";

export const query = {
  query: gql`
    query getData {
      products {
        data {
          id
          attributes {
            headline
            paragraph
            paragraph2
            date
            contentType
            slider {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
};
