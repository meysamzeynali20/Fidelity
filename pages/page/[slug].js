import Head from "next/head";
import { get } from "Base/Api";
import { BreadCrumb } from "root";
import { PageMain } from 'page'

const Page = () => {

    return <>
        <Head>
            <title>Page</title>
            <meta name="description" content="humanity" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <BreadCrumb />
        <PageMain />
    </>
};

export default Page;

const getServerSideProps = async (context) => {

    const { slug } = context.params || {}

    const url = `/PageContent/data?slug=${encodeURI(slug)}`;

    const data = await get(url);

    return {
        props: {
            ...data
        },
    }
}

export { getServerSideProps }