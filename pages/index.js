import Layout from '../layout/Layout';
import { useRouter } from 'next/router';
import { Link } from 'next-translate-routes';
import T from '../components/hoc/T';

const Homepage = () => {
    const { locale } = useRouter();

    return (
        <>
            <Layout 
                title="homepage"
                description="Homepage description" >
            </Layout>
        </>
    )
}

export default Homepage;