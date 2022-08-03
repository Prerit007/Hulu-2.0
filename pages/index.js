import Head from "next/head";
import Image from "next/image";
import { Header, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Navbar />
      </div>
    </div>
  );
}
