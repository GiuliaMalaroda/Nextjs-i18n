import { useRouter } from 'next/router';
import axios from "../lib/axios";
import I18n from "../components/hoc/I18n";
import LanguageNav from "../components/layout/LanguageNav";
import I18nLink from '../components/hoc/I18nLink';
import Link from 'next/link';

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
                    <Link href={`/news/${article.slug[locale]}`} locale={locale}>{article.slug[locale]}</Link>
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