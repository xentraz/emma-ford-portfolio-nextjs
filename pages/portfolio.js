// React
// import React from 'react';
import styles from '../styles/Home.module.css';
// import styled from 'styled-components';
// Components
import Head from 'next/head';
// import Heading from '../components/Heading/Heading';
import Header from '../components/Header';
import Body from '../components/Body/Body';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Emma Thurmer Portfolio</title>
    </Head>
      <Body>
        <Header/>
        <Main></Main>
        <Footer></Footer>
      </Body>
    </>
  );
};