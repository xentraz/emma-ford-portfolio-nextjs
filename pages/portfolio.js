// React
import React from "react";

// Components
import Head from "next/head";
import PortfolioHero from "../components/porfolioHero";
import PortfolioContent from "../components/porfolio";
import Footer from "../components/footer";
// Styles
import { Body } from "../components/body/Body.style";

// Thide React Component has the incorrect Name
export default function Portfolio() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Emma Thurmer Portfolio</title>
      </Head>
      <Body>
        <PortfolioHero />
        <main>
          <PortfolioContent />
        </main>
        <Footer />
      </Body>
    </>
  );
}
