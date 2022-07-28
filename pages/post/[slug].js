import { get } from "Base/Api";
import Head from "next/head";
import { BreadCrumb2 } from "post";
import { PostMain } from 'post'

const Post = () => {

    return <>
        <Head>
            <title>post</title>
            <meta name="description" content="Fidelity" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <BreadCrumb2 />
        <PostMain />
    </>
};

export default Post;

const getServerSideProps = async (context) => {

    const { slug } = context.params || {}

    const url = `/post/data?slug=${encodeURI(slug)}`;

    const data = await get(url);

    return {
        props: {
            ...data
        },
    }
}

export { getServerSideProps }