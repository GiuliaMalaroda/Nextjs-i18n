import Head from 'next/head';
import T from '../../components/hoc/T';

const MetaHead = ({ title, description }) => {
    return (
        <Head>
            <title>{T('pages',title)} | Next.js + i18n</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default MetaHead;