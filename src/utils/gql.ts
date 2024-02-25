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
            contenType
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
