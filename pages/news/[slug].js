import Layout from "../../layout/Layout";


const SingleNews = () => {
    return (
        <Layout>
            <div>Single news</div>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'title' }, locale: 'en' },
            { params: { slug: 'titolo' }, locale: 'it' },
            { params: { slug: 'titel' }, locale: 'de' }
        ],
        fallback: false,
    }
}
  
export async function getStaticProps({ params }) {
    return { props: { name: "Giulia Malaroda" } }
}

export default SingleNews;