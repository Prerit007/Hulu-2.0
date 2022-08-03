import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
}
