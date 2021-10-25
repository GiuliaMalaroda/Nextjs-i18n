import Link from 'next/link';

const routes = require('../../lib/routes');

const I18nLink = ({ slugs, locale, href, children }) => {
    let _href; 

    if ( href.pathname === "/" ) {
        _href = {
            pathname: "/"
        };
    } 
    else if (href.pathname === "/news/[slug]") {
        if (href.query.slug) {
            _href = {
                pathname: `${routes.links["/news"][locale]}/${href.query.slug}`
            };
        } else {
            _href = {
                pathname: `${routes.links["/news"][locale]}/${slugs?.[locale]}`
            };
        }
    } 
    else {
        _href = {
            pathname: routes.links[href.pathname][locale]
        };
    }

    return (
        <Link 
            href={_href} 
            locale={locale} > 
            {children}
        </Link>
    )
}

export default I18nLink;