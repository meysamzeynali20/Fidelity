import Head from "next/head";
import BreadCrumb from '../Components/BreadCrumb'
import Page_main from "../Components/page/PageMain";

const Page = () => {
    return <>
        <Head>
            <title>Page</title>
            <meta name="page" content="Fidelity" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <BreadCrumb />
        <Page_main />
    </>
};

export default Page;