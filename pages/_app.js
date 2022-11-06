import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZQ48DQ5YP2`}
      />

      <Script strategy="lazyOnload">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
           
             gtag('config', 'G-ZQ48DQ5YP2');
                `}
      </Script>

      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
