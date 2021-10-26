import Head from 'next/head';

const CustomHead = ({ title, description }) => {
    return (
        <Head>
            <title>{title} | i18n</title>
            <meta name="description" content={description} />
        </Head>
    )
}

export default CustomHead;