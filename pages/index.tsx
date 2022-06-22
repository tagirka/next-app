import type { NextPage } from "next";
import Head from "next/head";

import styles from "./Home/Home.module.css";
import HomePageComponent from "./Home/HomePageComponent";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fat Cat App</title>
        <meta name="description" content="Fat cat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePageComponent />
      </main>
    </div>
  );
};

export default Home;
