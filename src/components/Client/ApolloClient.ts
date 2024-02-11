import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const initClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://127.0.0.1:1337/graphql",
      }),

      cache: new InMemoryCache({ addTypename: false }),
    });
  }

  return client;
};
