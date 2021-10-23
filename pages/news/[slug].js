import { useRouter } from "next/router";
import axios from "../../lib/axios";

export async function getStaticProps({ params, locales }) {
    const { data } = await axios.get('/posts');

    let post;
    for (let i = 0; i < locales.length; i++) {
        let test = data.find(d => d.slug[locales[i]] === params.slug);

        if (test) {
            post = test;
        }
    }

    return { 
        props: { 
            post 
        },
        revalidate: 200,
    }
}

const SingleNews = ({ post }) => {
    const { locale } = useRouter();

    return (
        <article>
            {/* {name} */}
            <h1>{post.title[locale]}</h1>
            <p>{post.short_description[locale]}</p>
        </article>
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

    return { paths: paths, fallback: false }
}
  


export default SingleNews;