import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Products from "../components/Products";
import Services from "../components/Services";
import { client } from "../lib/client";
import css from "../styles/Home.module.css";

export default function Home({wheys}) {

  console.log(wheys)
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>PHYSIQUE | HOME</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Fevicon.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>   
          <Services/>
          <Products wheys={wheys}/>
        </main>
      </div>
      </Layout>
  );
}

export const getServerSideProps = async() => {
  const query = '*[_type == "whey"]';
  const wheys = await client.fetch(query);

  return {
    props: {wheys}
  }
}

