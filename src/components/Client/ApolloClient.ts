import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const initClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        // uri: process.env.CMS_URL,
        uri: "https://strapi-cms-7egxgsovaq-ew.a.run.app/graphql",
      }),

      cache: new InMemoryCache({ addTypename: false }),
    });
  }

  return client;
};
