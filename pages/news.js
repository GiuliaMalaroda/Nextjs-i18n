import { useRouter } from 'next/router';
import axios from "../lib/axios";
import I18n from "../components/hoc/I18n";
import LanguageNav from "../components/layout/LanguageNav";
import I18nLink from '../components/hoc/I18nLink';

const News = ({ data }) => {
    const { locale } = useRouter();

    return (
        <>
        <LanguageNav />
        <hr />
        <h1>{I18n("pages","news")}</h1>
        <hr />
        {data.map((article,i) => {
            return (
                <article key={i}>
                    <h1>{article.title[locale]}</h1>
                    <p>{article.short_description[locale]}</p>
                    <button>{article.slug[locale]}</button>
                </article>
            )
        })}
        </>
    )
}

export async function getStaticProps(context) {
    const { data } = await axios.get('/posts');
  
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }
    }
}

export default News;