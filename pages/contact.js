import Head from "next/head";
import { BreadCrumb } from "root";
import { ContactMain } from 'contact'

const Contact = () => {
  return <>
    <Head>
      <title>Contact</title>
      <meta name="description" content="Fidelity" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <BreadCrumb />
    <ContactMain />
  </>
};

export default Contact;

export async function getServerSideProps() {
  const data = await (
    await fetch("http://api.humanity.local/home/data/")
  ).json();

  return {
    props: {
      ...data,
    },
  };
}
