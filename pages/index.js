import { get } from 'Base/Api';
import Head from 'next/head';
import {
  Slides,
  About,
  Partners,
  Services,
  Gallery,
  Contact
} from 'Index'

export default function Home() {

  return <>
    <Head>
      <title>Index</title>
      <meta name="description" content="fidelity" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Slides />
    <About />
    <Partners />
    <Services />
    <Gallery />
    <Contact />
  </>
}

export async function getServerSideProps(context) {

  const data = await get("/home/data/");

  return {
    props: {
      ...data,
    },
  };
}
