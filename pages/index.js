// React
import React from "react";

// Components
import Head from "next/head";
import IndexHero from "../components/indexHero";
import HomeMain from "../components/homeMain";
import Footer from "../components/footer";
// Styles
import { Body } from "../components/body/Body.style";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Emma Thurmer Portfolio</title>
      </Head>
      <Body>
        <IndexHero />
        <HomeMain />
        <Footer />
      </Body>
    </>
  );
}
