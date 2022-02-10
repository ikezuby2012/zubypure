import Head from 'next/head'
import "../styles/App.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>zubyPure</title>
      <meta name="description" content="a portfolio website for mr zuby, zuby is also looking for a cool job" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
