import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
