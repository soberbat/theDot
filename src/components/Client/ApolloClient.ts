import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const initClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_CMS_URL,
      }),

      cache: new InMemoryCache({ addTypename: false }),
    });
  }

  return client;
};
