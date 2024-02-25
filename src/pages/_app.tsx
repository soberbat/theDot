import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider } from "@apollo/client";
// import { initClient } from "@/components/Client/ApolloClient";

export default function App({ Component, pageProps }: AppProps) {
  // const client = initClient();

  return (
    // <ApolloProvider client={client}>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
}
