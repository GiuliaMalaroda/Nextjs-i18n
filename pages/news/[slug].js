import { useRouter } from "next/router";
import axios from "../../lib/axios";
import LanguageNav from "../../components/layout/LanguageNav";
import MainNav from '../../components/layout/MainNav';

const SingleNews = ({ post, slugs }) => {
    const { locale, isFallback } = useRouter();

    if (isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <LanguageNav slugs={slugs} />
            <hr />
            <MainNav />
            <hr />
            <article>
                {/* {name} */}
                <h1>{post.title[locale]}</h1>
                <p>{post.short_description[locale]}</p>
            </article>
        </>
    )
}

export async function getStaticPaths({ locales }) {
    const { data } = await axios.get("/posts");

    let paths = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < locales.length; j++) {
            let path = {
                params: {
                    slug: data[i].slug[locales[j]]
                },
                locale: locales[j]
            }

            paths.push(path);
        }
    }

    return { paths: paths, fallback: true }
}

export async function getStaticProps({ params, locales }) {
    const { data } = await axios.get('/posts');

    let post;
    let slugs;
    for (let i = 0; i < locales.length; i++) {
        let thisPost = data.find(d => d.slug[locales[i]] === params.slug);
        
        if (thisPost) {
            post = thisPost;
            slugs = thisPost.slug;
        }
    }

    return { 
        props: { 
            post,
            slugs 
        }
    }
}

export default SingleNews;