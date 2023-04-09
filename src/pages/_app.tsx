import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { getClient } from "@/components/Client/ApolloClient";

export default function App({ Component, pageProps }: AppProps) {
  const client = getClient();

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
