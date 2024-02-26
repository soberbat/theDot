import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import HomePage from "@/components/HomePage/HomePage";
import { initClient } from "@/components/Client/ApolloClient";
import { gql } from "@apollo/client";
import { query } from "@/utils/gql";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const client = initClient();
  const { data } = await client.query(query);
  const pageData = data.products.data;
  return { props: { pageData } };
}

export default function Home({ pageData }: any) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="app.svg" />
        <title>DOT</title>
      </Head>
      <HomePage data={pageData} />
    </>
  );
}
