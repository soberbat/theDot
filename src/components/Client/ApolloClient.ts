import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:1337/graphql",
      }),

      cache: new InMemoryCache({ addTypename: false }),
    });
  }

  return client;
};
