import React, { useEffect } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Script from "next/script";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZQ48DQ5YP2`}
      />

      <Script strategy="lazyOnload" id="my-scriptTwo">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
           
             gtag('config', 'G-ZQ48DQ5YP2');
                `}
      </Script> */}

      <GoogleAnalytics measurementId="G-ZQ48DQ5YP2" />

      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
