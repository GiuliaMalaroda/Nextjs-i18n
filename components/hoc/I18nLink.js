import Link from 'next/link';

const routes = require('../../lib/routes');

const I18nLink = ({ locale, href, children }) => {
    let path; 

    if ( href === "/" ) {
        path = "/";
    } else {
        path = routes.links[href][locale];
    }

    return (
        <Link href={path} locale={locale}> 
            {children}
        </Link>
    )
}

export default I18nLink;