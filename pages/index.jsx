import Head from "next/head";
import QrGenerator from "../components/QrGenerator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="URL to QR Code Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <QrGenerator />
      </div>
    </div>
  );
}
