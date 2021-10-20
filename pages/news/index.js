import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../layout/Layout";
import T from "../../components/hoc/T";

const News = () => {
    //const { posts, setPosts } = useState();
    const { locale } = useRouter();

    return (
        <Layout title="news" >
            {T("pages","news")}
            {/* {articles.map((article, i) => {
                return (
                    <article key={i}>
                        <header>
                            <h1>{article.title}</h1>
                        </header>
                        <main>
                            <p>{article.short_description}</p>
                            <a>Leggi tutto</a>
                        </main>
                    </article>
                )
            })} */}
        </Layout>
    )
}

export default News;