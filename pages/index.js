// React
import React from 'react';
// import styles from '../styles/Home.module.css';

// Components
import Head from 'next/head';
import Body from '../components/Body/Body';
import IndexHero from '../components/indexHero';
import HomeMain from '../components/homeMain';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Emma Thurmer Portfolio</title>
    </Head>
      <Body>
        <IndexHero/>
        <HomeMain/>
        <Footer/>
      </Body>
    </>
  );
};

 