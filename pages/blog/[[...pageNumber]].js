import Head from "next/head";
import { get } from "base/Api";
import { BlogMain } from "blog"
import { BreadCrumb } from 'root'

const Blog = () => {
    return <>
        <Head>
            <title>Blog</title>
            <meta name="description" content="humanity" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <BreadCrumb />
        <BlogMain />
    </>
};

export default Blog

export async function getServerSideProps(context) {

    const { slug } = context.params || {}

    let url = "/blogsite/data?";

    if (slug)
        url += `slug=${encodeURI(slug)}`
    const data = await get(url)

    return {
        props: {
            ...data
        },
    }
}