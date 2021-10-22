const routes = require('./lib/routes');
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    reactStrictMode: true,

    async rewrites() {
        return [...routes.rewrites]
    },

    async redirects() {
        return [...routes.redirects]
    }
});