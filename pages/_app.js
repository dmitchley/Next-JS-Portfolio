import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      

      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
