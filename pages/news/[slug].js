import { useEffect } from "react";
import axios from "../../lib/axios";

const SingleNews = () => {
    useEffect(() => {
        axios.get("/posts").then(response => console.log(response.data));
    }, []);
    return (
        <h1>Lorem ipsum</h1>
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
  
export async function getStaticProps({ params }) {
    return { props: { name: "Giulia Malaroda" } }
}

export default SingleNews;