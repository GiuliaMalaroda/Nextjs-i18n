import { withTranslateRoutes } from 'next-translate-routes';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default withTranslateRoutes(App);