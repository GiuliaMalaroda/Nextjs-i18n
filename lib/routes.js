const DEFAULT_LOCALE = "en";
const LOCALES = ["it", "de"];

const routesHandler = (page, routes = []) => {
    let rewrites = [];
    let redirects = [];
    let links = {
        [`/${page}`]: {
            en: `/${page}`
        }
    }

    for (let i = 0; i < LOCALES.length; i++) {
        let rewrite = {
            source: `/${LOCALES[i]}/${routes[i]}`,
            destination: `/${LOCALES[i]}/${page}`,
            locale: false
        }

        let redirect = {
            source: `/${LOCALES[i]}/${page}`,
            destination: `/${LOCALES[i]}/${routes[i]}`,
            locale: false,
            permanent: true
        }

        links[`/${page}`][LOCALES[i]] = `/${LOCALES[i]}/${routes[i]}`;

        rewrites.push(rewrite);
        redirects.push(redirect);
    }

    return {
        rewrites: rewrites,
        redirects: redirects,
        links: links
    }
}

const aboutUs = routesHandler("about-us", ["chi-siamo", "uber-uns"]);
const news = routesHandler("news", ["novita", "nachrichten"]);
const singleNews = routesHandler("news/:slug", ["novita/:slug", "nachrichten/:slug"]);

exports.rewrites = [
    ...aboutUs.rewrites,
    ...news.rewrites,
    ...singleNews.rewrites
]

exports.redirects = [
    ...aboutUs.redirects,
    ...news.redirects,
    ...singleNews.redirects
]

exports.links = {
    ...aboutUs.links,
    ...news.links
}